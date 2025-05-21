import { Footer } from "@/components/footer";
import { dashboardConfig } from "@/config/dashboard";
import { DashboardNav } from "@/components/dashboard-nav";
import { auth } from "@/auth";
import Sidebar from "@/components/sidebar-nav";

export default async function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flexbox">
        <DashboardNav items={[]} session={session ?? undefined} />
        <Sidebar items={dashboardConfig.sideBarNav} />
      </header>

      <main className="flex-1 overflow-auto pb-20">
        {children}
      </main>

      <Footer className="fixed bottom-0 w-full border-t bg-muted/50" />
    </div>
  );
}
