import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import NavBar from "@/components/navigation/NavBar";
import { Footer } from "@/components/footer";
import { Toaster } from "react-hot-toast";
import SideNavigation from "@/components/navigation/SideNavigation";
import { CookieAnnouncement } from "@/components/shared";
import { ThemeProvider } from "@/components/theme-provider";
import "react-tooltip/dist/react-tooltip.css";
import "@smastrom/react-rating/style.css";
import { TanstackQueryClientProvider, ReduxStoreProvider } from "@/context";
import "./globals.css";

const bai_Jamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Electra - Advanced Online Shopping for Cameras, Laptops, and Monitors",
  description:
    "Electra is your go-to online shopping platform for the latest cameras, high-performance laptops, and top-quality monitors. Enjoy a smooth and enjoyable shopping experience with Electra.",
  metadataBase: new URL("https://electra-shop.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "hsl(229 100% 50%)",
          fontSize: "16px",
        },
      }}
    >
      <html lang="en">
        <body
          className={`relative min-h-dvh flex flex-col ${bai_Jamjuree.className} mx-auto text-lg 2xl:text-xl`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <TanstackQueryClientProvider>
              <ReduxStoreProvider>
                <NavBar />
                <Toaster
                  containerStyle={{
                    top: 40,
                  }}
                  toastOptions={{
                    className: "",
                    style: {
                      border: "1px solid #713200",
                      color: "#713200",
                    },
                  }}
                  position="top-center"
                  reverseOrder={false}
                />
                <main className=""> {children}</main>
                <SideNavigation />
                {/* <CookieAnnouncement /> */}
              </ReduxStoreProvider>
            </TanstackQueryClientProvider>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
