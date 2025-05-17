import { DashboardConfig } from "@/types";

export const dashboardConfig : DashboardConfig = {
    mainNav:[
        {
            title: "Cursos",
            href:"/cursos",
        },
         {
            title: "Articulos",
            href:"/articulos",
        },
    ],

    sideBarNav: [
        {
            title: "Residuos",
            href: "/residuos",
            icon: "trash",
        },
          {
            title: "Chat",
            href: "/chat",
            icon: "comment",
        },
        {
            title: "Usuarios",
            href: "/usuarios",
            icon: "users",
        },
        {
            title: "Perfil",
            href: "/perfil",
            icon: "user",
        },
    ]
}