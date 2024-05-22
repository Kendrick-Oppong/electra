import dbConnect from "@/lib/dbConnect";
import Apple from "@/models/laptop/Apple";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  try {
    await dbConnect();
      const apple = new Apple({
        title: 'Apple 13" MacBook Air M2',
        rating: 4.7,
        price: 900,
        shortDescription:
          'The Apple 13" MacBook Air with M2 chip in Space Gray offers impressive performance, sleek design, and advanced features, perfect for everyday use and productivity tasks.',
        brand: "Apple",
        videoUrl: "",
        fullDescription:
          'The Apple 13" MacBook Air (M2, Space Gray) is a versatile laptop designed for everyday computing tasks. Powered by the Apple M2 8-Core Chip and featuring 16GB of unified RAM and a 256GB SSD, it offers smooth performance and fast storage access. The 13.6" Liquid Retina display with a resolution of 2560 x 1664 provides crisp and vibrant visuals, while the 8-Core GPU and 16-Core Neural Engine enhance graphics and machine learning capabilities. Connectivity options include Wi-Fi 6, Bluetooth 5.0, and Thunderbolt 3 for fast data transfer. The FaceTime Full HD 1080p camera, backlit Magic Keyboard, Force Touch trackpad, and Touch ID sensor ensure convenience and security. Running macOS, this MacBook Air is ideal for work, entertainment, and creativity.',
        stockQuantity: 21,
        images: {
          primaryImage:
            "https://ik.imagekit.io/bhn8xrk7f/apple/13_m2_1.1.png?updatedAt=1716215393994",
          otherImages: [
            "https://ik.imagekit.io/bhn8xrk7f/apple/13_m2_4.png?updatedAt=1716134080961",
            "https://ik.imagekit.io/bhn8xrk7f/apple/13_m2_3.png?updatedAt=1716134083146",
            "https://ik.imagekit.io/bhn8xrk7f/apple/m3_pro_4.png?updatedAt=1716128731814",
          ],
        },
        display: {
          color: "Gray",
          dimensions: {
            length: 11.97,
            width: 8.36,
            height: 0.63,
          },
          panelType: "Liquid Retina",
          resolution: "2560x1664",
          surfaceType: "Glossy",
          refreshRate: "60Hz",
        },
        operatingSystem: "macOS",
        processor: "Apple M2",
        gpu: "8-Core GPU",
        totalInstalledMemory: "16GB Unified RAM",
        displaySize: "13.6 inches",
        nativeResolution: "2560x1664",
        touchscreen: false,
        totalInstalledCapacity: "256GB SSD",
        inputsOutputs: ["1 x Thunderbolt 3"],
        processorDetails: {
          processor: "Apple M2",
          cpu: "8-Core",
          l3Cache: "Unknown",
          graphicsType: "Integrated",
          gpu: "8-Core GPU",
          memoryType: "Unified",
          totalInstalledMemory: "16GB",
          memoryConfiguration: "Unified Memory",
          memorySlotType: "N/A",
          memorySlots: 0,
          eccMemory: false,
        },
        storageDriveType: "SSD",
        storageExpansion: false,
        ioDetails: {
          audioIO: "3.5mm Headphone Jack",
          networkIO: "No",
          builtInSpeakers: true,
          builtInMicrophones: true,
          mediaMemoryCardSlot: "No",
        },
        communications: {
          wifi: "Wi-Fi 6 (802.11ax)",
          bluetooth: "Bluetooth 5.0",
          cellularSupport: false,
          gps: false,
          webcam: "FaceTime Full HD 1080p Camera",
        },
        battery: {
          capacity: "49.9Wh",
        },
        keyboardMouse: {
          keyboard: "Backlit Magic Keyboard",
          pointingDevice: "Force Touch Trackpad",
        },
        generalDetails: {
          security: ["Touch ID Sensor", "Apple T2 Security Chip"],
          powerSupply: "30W USB-C Power Adapter",
          dimensions: "11.97 x 8.36 x 0.63 inches",
          weight: "2.8 lbs",
        },
        suppliedAccessories: ["Power Adapter", "User Manual"],
      });

    await apple.save();
    if (!apple.length) {
      return NextResponse.json({ message: "No data found " }, { status: 404 });
    }
    return NextResponse.json({ data: apple, count: apple.length }, { status: 200 });
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
