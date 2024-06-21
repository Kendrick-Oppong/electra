"use client"; // Error components must be Client Components
import { ButtonLink } from "@/components/shared";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="text-center">
      <h2>Something went wrong!</h2>
      <ButtonLink
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </ButtonLink>
    </div>
  );
}
