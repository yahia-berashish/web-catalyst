"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SessionProvider>
      <NextUIProvider>
        {children}
        <Toaster theme="system" />
      </NextUIProvider>
    </SessionProvider>
  );
};

export default Providers;
