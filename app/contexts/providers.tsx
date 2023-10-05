"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "./ThemeContext";
import { SidebarProvider } from "../layout/Sidebar";
import { Toaster } from "sonner";

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <NextUIProvider>
      <ThemeProvider>
        <Toaster />
        <SidebarProvider>{children}</SidebarProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
};
