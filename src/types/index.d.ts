import { ZodIssue } from "zod";
import { Icons } from "@/components/icons"

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  icon?: keyof typeof Icons;
}


export type MainNavItem = NavItem;
export type SideBarNavItem = NavItem;
export type DashboardConfig = {
  mainNav: MainNavItem[];
  sideBarNav: SideBarNavItem[];
};

type ActionResult<T> = {status: "success"; data: T} | {status: "error"; error: string | ZodIssue[]};
