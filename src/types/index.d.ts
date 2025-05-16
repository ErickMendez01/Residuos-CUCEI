import { ZodIssue } from "zod";
export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type DashboardConfig = {
  mainNav: MainNavItem[];
};

type ActionResult<T> = {status: "success"; data: T} | {status: "error"; error: string | ZodIssue[]};
