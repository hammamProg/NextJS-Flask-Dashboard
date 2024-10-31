"use client";

import ProfileNavItem from "./ProfileNavItem";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const ProfileNav = () => {
  let pathname = usePathname();
  const [userId, setUserId] = useState("");
  useEffect(() => {
    // This code runs only in the browser
    const id = localStorage.getItem("userId") || "";
    setUserId(id);
  }, []);

  return (
    <div className="w-2/6 p-5 h-screen">
      <ul>
        <ProfileNavItem
          title="Basic Information"
          href={`/dashboard/profile/basic-information/${userId}`}
          isActive={pathname.includes("/dashboard/profile/basic-information")}
        />
        <ProfileNavItem title="Specialization" href="" />
        <ProfileNavItem title="Lawyer Team" href="" />
        <ProfileNavItem title="Reviews" href="" />
        <ProfileNavItem title="Case Information" href="" />
        <ProfileNavItem title="Financial Information" href="" />
        <ProfileNavItem title="Communication" href="" />
        <ProfileNavItem title="Documents" href="" />
      </ul>
    </div>
  );
};

export default ProfileNav;
