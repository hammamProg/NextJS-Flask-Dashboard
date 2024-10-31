import React from "react";

const TopBarItem = (props: {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}) => {
  return (
    <div className="rounded-full p-5 bg-[#F7F8FA] h-12 flex items-center mx-2">
      {props.children}
    </div>
  );
};

export default TopBarItem;
