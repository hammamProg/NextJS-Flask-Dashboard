import Link from "next/link";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";
import { UrlObject } from "url";

const ProfileNavItem = (props: {
  href: string | UrlObject;
  title: string;
  isActive?: boolean;
}) => {
  return (
    <Link
      href={props.href}
      className={`
        ${props.isActive ? "bg-white font-bold" : ""}
        rounded-full flex justify-left hover:bg-white hover:font-bold p-4 `}
    >
      <h5 className="ml-5 text-sm">{props.title}</h5>
    </Link>
  );
};

export default ProfileNavItem;
