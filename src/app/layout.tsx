import type { Metadata } from "next";
import Providers from "@/components/Providers";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
export const metadata: Metadata = {
  title: "Reciclaje CUCEI",
  description: "Administra los residuos electronícos dentro de la institución!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={cn(
          "min-h-screen bg-background font-sans antialiased"
        )}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
