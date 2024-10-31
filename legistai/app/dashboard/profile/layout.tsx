import Nav from "@/components/Nav";
import ProfileNav from "@/components/ProfileNav";
import TopBar from "@/components/TopBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="m-10 bg-white rounded-3xl px-5 py-8">
        <h3 className="font-bold text-xl">Profile</h3>
        <p className="mb-5 ">
          Manage your details and personal preference here
        </p>
        <div className="w-full rounded-3xl bg-[#F7F8FA] ">
          <div className="flex">
            <ProfileNav />
            <div className="border my-10"></div>
            <div className="p-5 w-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
