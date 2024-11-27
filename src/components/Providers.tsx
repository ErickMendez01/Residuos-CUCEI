"use client";
import { NextUIProvider } from "@nextui-org/react";
import React, { ReactNode, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Providers({ children }: { children: ReactNode }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system" 
        enableSystem={true} 
        enableColorScheme={false}
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
