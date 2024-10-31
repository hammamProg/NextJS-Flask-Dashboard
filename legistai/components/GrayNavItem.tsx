import Link from "next/link";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";
import { UrlObject } from "url";
const GrayNavItem = (props: {
  href: string | UrlObject;
  icon: any;
  title: string;
}) => {
  return (
    <Link href={props.href} className=" m-5">
      <li className="bg-gray-100 text-black hover:bg-black hover:text-white flex justify-left rounded-full h-12 items-center group transition duration-100">
        <i
          className={`ml-10 mr-5 text-xl group-hover:text-[#3DBDBC]  ${props.icon}`}
        ></i>
        <span className=" text-sm font-bold group-hover:text-white">
          {props.title}
        </span>
      </li>
    </Link>
  );
};

export default GrayNavItem;
