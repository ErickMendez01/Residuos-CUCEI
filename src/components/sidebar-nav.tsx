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
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Botón de toggle flotante más abajo */}
      <button
        onClick={toggleSidebar}
        className="
          fixed top-3 left-10 z-50 p-2 bg-white dark:bg-zinc-900 
          rounded-md shadow-md dark:text-white
          transition-all duration-300 ease-in-out
        "
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar superpuesto completamente ocultable */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen
          bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white
          border-r border-zinc-200 dark:border-zinc-700
          transition-all duration-300 ease-in-out
          overflow-hidden flex flex-col
          ${isOpen ? "w-60 px-4 py-6" : "w-0 px-0 py-0"}
        `}
      >
        {isOpen && (
          <>
            <nav className="flex-1 overflow-y-auto">
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
                        <span className="text-sm font-medium">{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {children && <div className="mt-8">{children}</div>}
          </>
        )}
      </aside>
    </>
  );
}
