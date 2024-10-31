import React from "react";

const SearchPar = () => {
  return (
    <div className="flex items-center relative">
      <i className="bx bx-search absolute ml-5 text-2xl" />
      <input
        type="text"
        className="rounded-full bg-[#F7F8FA] px-14 h-12 min-w-[650px]"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchPar;
