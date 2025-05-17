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
    <div className="flex flex-col space-y-6">
      <header>
        <DashboardNav
          items={dashboardConfig.mainNav}
          session={session ?? undefined}
        />
        <Sidebar items={dashboardConfig.sideBarNav} />
      </header>
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
