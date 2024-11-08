"use client";

import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { MainNavItem } from "@/types";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items = [], children }: MainNavProps) {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Link href="/">Ckeck task</Link>
      </NavbarBrand>
      <NavbarContent>
        {items.map((item, index) => (
          <NavbarItem key={index}>
              <Link href={item.href}>{item.title}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      {children}
    </Navbar>
  );
}

