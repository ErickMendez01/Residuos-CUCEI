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
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import { div } from "framer-motion/client";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items = [], children }: MainNavProps) {
  const pathname = usePathname();
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  return (
    <div>
      <LoginForm isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
      <RegisterForm isOpen={isRegisterOpen} onClose={() => setRegisterOpen(false)} />
      <Navbar
        isBordered
        classNames={{
          item: ["data-[active=true]:text-blue"],
        }}
      >
        <NavbarBrand>
          <Link className="font-semibold flex" href="/">
            Check Task
          </Link>
        </NavbarBrand>

        <NavbarContent justify="center">
          {items.map((item, index) => (
            <NavbarItem
              isActive={pathname === item.href}
              className={`font-medium ${
                pathname === item.href ? "text-blue" : ""
              }`}
              key={index}
            >
              <Link
                href={item.href}
                className={pathname === item.href ? "text-blue" : ""}
              >
                {item.title}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <Button
            className="bg-white font-bold border-black"
            variant="faded"
            radius="lg"
            onClick={() => setLoginOpen(true)}
          >
            Sign in
          </Button>
          <Button
            className="text-white font-bold bg-black"
            variant="flat"
            radius="lg"
            onClick={() => setRegisterOpen(true)}
          >
            Sign Up
          </Button>
        </NavbarContent>
        {children}
      </Navbar>
    </div>
  );
}
