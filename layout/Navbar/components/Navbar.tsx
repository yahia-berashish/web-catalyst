"use client";

import React from "react";
import {
  Button,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NavbarPrimitive,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { NavAvatar } from "./NavAvatar";

export const Navbar: React.FC = () => {
  const { status } = useSession();

  return (
    <NavbarPrimitive>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {status === "authenticated" ? (
          <NavAvatar />
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="/auth/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                color="primary"
                href="/auth/signup"
                variant="flat"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </NavbarPrimitive>
  );
};
