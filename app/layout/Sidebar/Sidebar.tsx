"use client";
import React from "react";
import {
  Card,
  CardHeader,
  Divider,
  CardBody,
  CardFooter,
  Link,
  User,
  Button,
} from "@nextui-org/react";
import { SidebarLink } from ".";
import { Settings } from "lucide-react";

export const Sidebar: React.FC = () => {
  // const { isOpen, toggleIsOpen } = useContext(SidebarContext);

  return (
    <Card className="rounded-s-none rounded-e-sm h-screen me-6 w-full min-[450px]:w-80">
      <CardHeader className="flex items-center justify-between">
        <SidebarLink href="/profile" className="py-8">
          <User
            name="Joe Doe"
            description="Product Manager"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a24258114e29026702d",
            }}
          />
        </SidebarLink>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-y-2">
        <h1 className="text-xl font-bold ps-4">Libraries</h1>
        <div className="flex flex-col gap-y-1">
          <SidebarLink href="#">Home</SidebarLink>
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <SidebarLink
          href="/profile/settings"
          startContent={<Settings className="h-5 w-5" />}
        >
          Settings
        </SidebarLink>
      </CardFooter>
    </Card>
  );
};
