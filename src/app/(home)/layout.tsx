import { MainNav } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { dashboardConfig } from "@/config/dashboard";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen flex flex-col">
      <MainNav items={dashboardConfig.mainNav} />
      <div className="flex-grow">{children}</div>
      <Footer />
    </main>
  );
}

