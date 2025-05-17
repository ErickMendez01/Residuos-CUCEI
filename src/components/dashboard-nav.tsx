"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { MainNavItem } from "@/types";
import UserDropMenu from "./user-dropmenu";
import { Session } from "next-auth";
interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  session?: Session;
}

export function DashboardNav({ items = [], children, session }: MainNavProps) {
  return (
    <Navbar
      position="sticky"
      isBordered
      classNames={{
        item: ["data-[active=true]:text-blue"],
      }}
    >
      <NavbarBrand>
        <Link className="font-semibold flex" href="/">
          Residuos CUCEI
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        {items.map((item, index) => (
          <NavbarItem
            className={`font-medium`}
            key={index}
          >
            <Link
              href={item.href}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {session?.user ? <UserDropMenu user={session.user} /> : null}
      </NavbarContent>
      {children}
    </Navbar>
  );
}
