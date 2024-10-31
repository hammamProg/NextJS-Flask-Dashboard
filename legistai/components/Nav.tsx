"use client";
import NavItem from "./NavItem";
import GrayNavItem from "./GrayNavItem";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const Nav = () => {
  let pathname = usePathname();
  const [userId, setUserId] = useState("");
  useEffect(() => {
    // This code runs only in the browser
    const id = localStorage.getItem("userId") || "";
    setUserId(id);
  }, []);

  return (
    <div className=" w-1/4 flex flex-col justify-between">
      <div>
        <div className="ml-3 px-10">
          <h1 className="text-xl font-semibold">Welcome to the Legistai!</h1>
        </div>
        <div className="mx-5">
          <ul className="w-full mt-5 font-semibold ">
            <NavItem
              href="/dashboard"
              icon="bx bxs-dashboard"
              title="Dashboard"
              isActive={pathname === "/dashboard"}
            />
            <NavItem href="/drive" icon="bx bxs-file-find" title="Drive" />
            <NavItem
              href={`/dashboard/profile/basic-information/${userId}`}
              icon="bx bxs-user"
              title="Profile"
              isActive={pathname.includes(
                "/dashboard/profile/basic-information"
              )}
            />

            <NavItem
              href="/calendar"
              icon="bx bxs-calendar"
              title="Calendar"
              isActive={pathname === "/calendar"}
            />
            <NavItem
              href="/options"
              icon="bx bx-shield-alt"
              title="Law Firm Options"
              isActive={pathname === "/options"}
            />
            <NavItem
              href="/settings"
              icon="bx bxs-cog"
              title="Settings"
              isActive={pathname === "/settings"}
            />
            <NavItem
              href="/new-chat"
              icon="bx bx-message-square-dots"
              title="Start New Chat"
              isSpecial={true}
              isActive={pathname === "/new-chat"}
            />
          </ul>
        </div>
      </div>
      <GrayNavItem href="/" icon="bx bx-log-out" title="Log out" />
    </div>
  );
};

export default Nav;
