import { MainNav } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { dashboardConfig } from "@/config/dashboard";
import { auth } from "@/auth";
import { DashboardNav } from "@/components/dashboard-nav";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <main className="min-h-screen flex flex-col">
      {!session ? (
        <MainNav items={dashboardConfig.mainNav} />
      ) : (
        <DashboardNav items={dashboardConfig.mainNav} session={session}/>
      )}

      <div className="flex-grow">{children}</div>

      <Footer />
    </main>
  );
}
