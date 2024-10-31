import Nav from "@/components/Nav";
import TopBar from "@/components/TopBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <TopBar />
      <div className="flex flex-row h-[calc(100vh-100px)]">
        <Nav />
        <main className="rounded-tl-3xl bg-[#F7F8FA] overflow-y-scroll w-full">
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
}
