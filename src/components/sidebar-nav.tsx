"use client";

import { useState } from "react";
import Link from "next/link";
import { SideBarNavItem } from "@/types";
import { Icons } from "@/components/icons";
import { FaBars, FaTimes } from "react-icons/fa";

interface SideBarProps {
  items?: SideBarNavItem[];
  children?: React.ReactNode;
}

export default function Sidebar({ items = [], children }: SideBarProps) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`
          fixed z-50 p-2 bg-white dark:bg-zinc-900 rounded-md shadow-md dark:text-white
          transition-all duration-300 ease-in-out
           ${isOpen ? "left-48" : "left-4"}
           `}
         aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <aside
        className={`
          h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white border-r border-zinc-200 dark:border-zinc-700
          transition-all duration-300 ease-in-out flex flex-col px-4 py-6
          ${isOpen ? "w-60" : "w-16"}
        `}
      >
        <nav>
          <ul className="flex flex-col py-4 space-y-2">
            {items.map((item, index) => {
              const Icon = Icons[item.icon as keyof typeof Icons];
              return (
                <li key={item.title + index} className="w-full">
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    {Icon && <Icon className="w-5 h-5 shrink-0" />}
                    <span
                      className={`
                        text-sm font-medium transition-opacity duration-300
                        ${
                          isOpen
                            ? "opacity-100"
                            : "opacity-0 overflow-hidden w-0"
                        }
                      `}
                    >
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {children && (
          <div
            className={`mt-8 transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {children}
          </div>
        )}
      </aside>
    </>
  );
}
