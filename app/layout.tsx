import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${appFont.className} antialiased`}
      >
        <main className="max-w-400 mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
