import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { createUser, deleteUser, updateUser } from "@/lib/actions/userActions";
import { signUpSchema } from "@/validators/signUpSchema";

interface UserProps {
  clerkId: string;
  username: string;
  email: string;
  photo: string;
}

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(" WEBHOOK_SECRET not found");
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  const eventType = evt.type;

  switch (eventType) {
    case "user.created": {
      const { id, image_url, username, email_addresses } = evt.data;
      try {
        const user = {
          clerkId: id,
          username: username,
          email: email_addresses[0].email_address,
          photo: image_url,
        };

        const validatedUser = signUpSchema.parse(user);
        const newUser = await createUser(validatedUser);

        if (newUser) {
          await clerkClient.users.updateUserMetadata(id, {
            publicMetadata: { userId: newUser._id },
          });
        }

        return NextResponse.json(
          { message: "User successfully created" },
          { status: 201 },
        );
      } catch (err) {
        console.error("Error creating user:", err);
        return NextResponse.json(
          { message: "An error occurred when creating user" },
          { status: 500 },
        );
      }
    }

    case "user.updated": {
      const updatedData = evt.data;
      try {
        const updates: Partial<UserProps> = {};
        if (updatedData.username) updates.username = updatedData.username;
        if (updatedData.email_addresses && updatedData.email_addresses[0]) {
          updates.email = updatedData.email_addresses[0].email_address;
        }
        if (updatedData.image_url) updates.photo = updatedData.image_url;

        const updatedUser = await updateUser(updatedData.id, updates);

        return NextResponse.json(
          { message: "User successfully updated", updatedUser },
          { status: 200 },
        );
      } catch (err) {
        console.error("Error updating user:", err);
        return NextResponse.json(
          { message: "An error occurred when updating user" },
          { status: 500 },
        );
      }
    }

    case "user.deleted": {
      const deletedData = evt.data;
      try {
        await deleteUser(deletedData.id as string);
        return NextResponse.json(
          { message: "User successfully deleted" },
          { status: 200 },
        );
      } catch (err) {
        console.error("Error deleting user:", err);
        return NextResponse.json(
          { message: "An error occurred when deleting user" },
          { status: 500 },
        );
      }
    }

    default:
      return NextResponse.json(
        { message: "Event not handled" },
        { status: 400 },
      );
  }

  return new Response("", { status: 200 });
}
