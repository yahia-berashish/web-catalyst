"use client";
import React, { createContext } from "react";
import { useToggle } from "react-use";

export interface SidebarContextInterface {
  isOpen: boolean;
  toggleIsOpen: (value?: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextInterface>({
  isOpen: false,
  toggleIsOpen() {},
});

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, toggleIsOpen] = useToggle(true);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};
