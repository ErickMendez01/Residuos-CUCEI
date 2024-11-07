import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "To do list",
  description: "Manega tu dia ahora!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
