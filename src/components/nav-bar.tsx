"use client";

import Link from "next/link";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { MainNavItem } from "@/types";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LoginForm from "./login-Form";
import RegisterForm from "./register-Form";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items = [], children }: MainNavProps) {
  const pathname = usePathname();
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <Navbar
      position="sticky"
      isBordered
      classNames={{
        item: ["data-[active=true]:text-blue"],
      }}
    >
      {isLoginOpen && (
        <LoginForm isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
      )}
      {isRegisterOpen && (
        <RegisterForm
          isOpen={isRegisterOpen}
          onClose={() => setRegisterOpen(false)}
        />
      )}
      <NavbarBrand>
        <Link className="font-semibold flex" href="/">
          Residuos CUCEI
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        {items.map((item, index) => (
          <NavbarItem
            isActive={isActive(item.href)}
            className={`font-medium ${isActive(item.href) ? "text-blue" : ""}`}
            key={index}
          >
            <Link
              href={item.href}
              className={isActive(item.href) ? "text-blue" : ""}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <Button
          className="bg-white text-black dark:bg-black dark:text-white dark:border-white font-bold border-black"
          variant="faded"
          radius="lg"
          onClick={() => setLoginOpen(true)}
        >
          Sign in
        </Button>
        <Button
          className="bg-black text-white dark:bg-white dark:text-black font-bold border-black"
          variant="flat"
          radius="lg"
          onClick={() => setRegisterOpen(true)}
        >
          Sign Up
        </Button>
      </NavbarContent>
      {children}
    </Navbar>
  );
}
