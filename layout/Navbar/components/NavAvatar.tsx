import React from "react";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Link,
} from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

export const NavAvatar: React.FC = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly radius="full">
          <Avatar
            name="Yahia Berashish"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownSection showDivider>
          <DropdownItem
            as={Link}
            key="profile"
            href="/profile"
            className="text-default"
          >
            Profile
          </DropdownItem>
        </DropdownSection>
        <DropdownSection className="mb-0">
          <DropdownItem
            key="sign-out"
            className="text-danger"
            color="danger"
            onClick={() =>
              signOut().then(() => toast("Signed out successfully."))
            }
          >
            Sign Out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
