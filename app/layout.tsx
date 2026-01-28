import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import UserProvider from "@/provider/userProvider";

const appFont = DM_Sans({
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "UI/UX Mockup generator web application",
  description: "Generate High fidelity UI/UX Mockups for your Web and Mobile applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${appFont.className} antialiased`}
        >
          <UserProvider>
            <main className="max-w-400 mx-auto">
              {children}
            </main>
            <Toaster />
          </UserProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
