import { Footer } from "@/components/footer";
import { dashboardConfig } from "@/config/dashboard";
import { DashboardNav } from "@/components/dashboard-nav";
import { auth } from "@/auth";
import Sidebar from "@/components/sidebar-nav";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <main className="min-h-screen flex flex-col">
      <DashboardNav items={dashboardConfig.mainNav} session={session ?? undefined} />
      <div className="flex flex-1">
        <Sidebar items={dashboardConfig.sideBarNav} />

        <div className="flex-1 p-6 overflow-auto bg-zinc-50 dark:bg-zinc-950">
          {children}
        </div>
      </div>

      <Footer />
    </main>
  );
}
