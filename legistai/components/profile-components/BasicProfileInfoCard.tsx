import Image from "next/image";
import Link from "next/link";
import ProfileImage from "@/images/profile-image.png";
import CardInfo from "./CardInfo";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";
import { UrlObject } from "url";
const BasicProfileInfoCard = (props: {
  username: string;
  rating: string;
  link: string | UrlObject;
  location: any;
  phone_number: any;
  email_address: any;
  description: string;
}) => {
  return (
    <div className="w-full h-full">
      <h5 className="mb-5 font-bold">Basic Information</h5>
      <div className="bg-white rounded-2xl p-5 flex flex-col">
        <header className="flex flex-row justify-between items-center mb-5">
          <div className="flex flex-row">
            <Image
              src={ProfileImage}
              alt="Profile Image"
              className="rounded-2xl w-24 h-24 mr-5"
            />
            <div className="flex flex-col justify-center">
              <h1 className="font-semibold text-xl mb-3">{props.username}</h1>
              <div className="flex flex-row  items-center rounded-full bg-[#F7F8FA] justify-around font-semibold p-2">
                <i className="bx bxs-star text-orange-300 mr-1" />
                <span className="mr-2">{props.rating}</span>
                <span>Rating</span>
              </div>
            </div>
          </div>
          <Link
            href={props.link}
            className="flex justify-around w-48 items-center text-[#3DBDBC] rounded-full bg-[#3dbdbd1b] p-2"
          >
            <p className="">Website Link</p>
            <i className="bx bx-link-external" />
          </Link>
        </header>

        <div className="bg-[#F7F8FA] p-5 rounded-2xl flex flex-row mb-5">
          <CardInfo icon="bx bxs-map" title="Location" info={props.location} />
          <CardInfo
            icon="bx bxs-phone"
            title="Phone Number"
            info={props.phone_number}
          />
          <CardInfo
            icon="bx bxs-envelope"
            title="Email Address"
            info={props.email_address}
          />
        </div>
        <div className="bg-[#F7F8FA] p-5 rounded-2xl ">
          <span className="text-gray-400">Description</span>
          <p className="text-black font-semibold">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BasicProfileInfoCard;
