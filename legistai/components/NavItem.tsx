import Link from "next/link";

const NavItem = (props: {
  href: string;
  isSpecial?: boolean;
  icon: any;
  title: string;
  isActive?: boolean;
}) => {
  return (
    <Link href={props.href} className=" ">
      <li
        className={`hover:bg-black 
          ${props.isActive === true ? "bg-black text-[#3DBDBC]" : ""}
          ${
            props.isSpecial === true
              ? "bg-[#3dbdbd41] border-[#3dbdbd9e] border-1 text-primary hover:text-white"
              : "hover:text-white"
          }
           flex justify-left rounded-full h-12 items-center group transition duration-100`}
      >
        <i
          className={`ml-10 mr-5 text-xl group-hover:text-[#3DBDBC]  ${props.icon}`}
        ></i>
        <span
          className={`${
            props.isSpecial === true ? "text-primary" : "text-gray-500"
          }  text-sm group-hover:text-white`}
        >
          {props.title}
        </span>
      </li>
    </Link>
  );
};

export default NavItem;
