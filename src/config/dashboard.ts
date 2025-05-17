import { DashboardConfig } from "@/types";

export const dashboardConfig : DashboardConfig = {
    mainNav:[
    ],

    sideBarNav: [
        {
            title: "Residuos",
            href: "/residuos",
            icon: "trash",
        },
          {
            title: "Chat",
            href: "/chatbot",
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