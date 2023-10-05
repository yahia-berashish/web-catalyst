"use client";
import React from "react";
import { Button, ButtonProps, Link, cn } from "@nextui-org/react";

export interface SidebarLinkProps extends ButtonProps {
  href: string;
}

export const SidebarLink: React.FC<SidebarLinkProps> = ({
  children,
  href,
  className,
  ...rest
}) => {
  return (
    <Button
      className={cn("justify-start w-full", className || "")}
      variant="light"
      {...rest}
    >
      <Link href={href} color="foreground">
        {children}
      </Link>
    </Button>
  );
};
