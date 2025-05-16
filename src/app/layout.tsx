import type { Metadata } from "next";
import Providers from "@/components/Providers";
import "@/app/globals.css";
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
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
