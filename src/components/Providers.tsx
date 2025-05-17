"use client";

import { NextUIProvider } from "@nextui-org/react";
import React, { ReactNode, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastWithTheme() {
  const { theme, resolvedTheme } = useTheme();

  return (
    <ToastContainer
      position="bottom-right"
      className="z-50"
      autoClose={2000}
      theme={resolvedTheme === "dark" ? "dark" : "light"}
    />
  );
}

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
        enableSystem
        enableColorScheme={false}
      >
        <ToastWithTheme />
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
