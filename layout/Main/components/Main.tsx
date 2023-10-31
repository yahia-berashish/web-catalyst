import React from "react";
import { C } from "@/types/utils";

export const Main: React.FC<C> = ({ children }) => {
  return (
    <main className="w-full overflow-x-hidden min-h-screen">{children}</main>
  );
};
