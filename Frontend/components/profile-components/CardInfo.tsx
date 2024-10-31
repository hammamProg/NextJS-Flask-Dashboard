import React from "react";

const CardInfo = (props) => {
  return (
    <div className="mr-5">
      <div className="flex items-center">
        <i className={`${props.icon} mr-1 text-[#3DBDBC] text-2xl`} />
        <span className="text-gray-400 text-sm">{props.title}</span>
      </div>
      <p className="font-bold text-[13px]">{props.info}</p>
    </div>
  );
};

export default CardInfo;
