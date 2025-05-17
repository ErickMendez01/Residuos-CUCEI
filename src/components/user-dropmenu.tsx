"use client";
import { signOutUser } from "@/actions/authActions";
import {
  Avatar,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
  DropdownSection,
} from "@nextui-org/react";
import { Session } from "next-auth";
import Link from "next/link";

type UserDropMenuProps = {
  user: Session["user"];
};

export default function UserDropMenu({ user }: UserDropMenuProps) {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          size="md"
          className="cursor-pointer transition-trasnform"
          name={user?.name || "user avatar"}
          src={user?.image || "/images/user.png"}
        />
      </DropdownTrigger>
      <DropdownMenu variant="flat" aria-label="User menu">
        <DropdownSection showDivider>
          <DropdownItem
            isReadOnly
            as="span"
            className="flex flex-row h-14 text-sm font-medium"
            aria-activedescendant="username"
          >
            Bienvenido {user?.name}
          </DropdownItem>
        </DropdownSection>
        <DropdownItem color="danger" onClick={async () => signOutUser()}>
          Cerrar sesión
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
