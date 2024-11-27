import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import { MainNav } from "@/components/navbar";
import { dashboardConfig } from "@/config/dashboard";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
export const metadata: Metadata = {
  title: "To do list",
  description: "Maneja tu dia ahora!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MainNav items={dashboardConfig.mainNav} />
          <ThemeSwitcher />
          {children}
        </Providers>
      </body>
    </html>
  );
}
