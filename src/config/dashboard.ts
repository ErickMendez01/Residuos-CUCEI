import { DashboardConfig } from "@/types";

export const dashboardConfig : DashboardConfig = {
    mainNav:[
        {
            title: "Cursos",
            href:"#",
        },
         {
            title: "Articulos",
            href:"#",
        },
    ],

    sideBarNav: [
        {
            title: "Residuos",
            href: "/app/residuos",
            icon: "trash",
        },
          {
            title: "Chat",
            href: "/app/chat",
            icon: "comment",
        },
        {
            title: "Usuarios",
            href: "/app/usuarios",
            icon: "users",
        },
        {
            title: "Perfil",
            href: "/app/perfil",
            icon: "user",
        },
    ]
}