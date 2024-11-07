"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

export default function NavBar() {
    return (
      <Navbar isBordered>
        <NavbarBrand>
          <p className="font-bold text-inherit">Check Task</p>
        </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Funcionalidades
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Conocenos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Contacto
            </Link>
          </NavbarItem>
        </NavbarContent>
          <NavbarContent className="flex sm:hidden gap-4" justify="center">
          <NavbarItem>
            <Link href="#">Funcionalidades</Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Conocenos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#">Contacto</Link>
          </NavbarItem>
        </NavbarContent>
          <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Sign In</Link>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Sign Up</Link>
          </NavbarItem>
        </NavbarContent>
          <NavbarContent className="flex sm:hidden justify-end">
          <NavbarItem>
            <Link href="#">Sign In</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#">Sign Up</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
  }