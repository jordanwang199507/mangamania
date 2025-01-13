import React from "react";
import SearchIcon from "@/public/assets/svg/SearchIcon";
import { user } from "../_constants";

const Toolbar = () => {
  return (
    <div className="toolbar opacity-0 flex-shrink-0 h-[75px] max-sm:h-[50px] w-1/2 flex items-center justify-end gap-8 max-md:gap-4 max-sm:gap-3">
      {/* searchbar   */}
      <div className="w-1/2 border-2 border-primary rounded-full p-1 px-4 max-md:p-1 bg-darkPrimary max-md:w-12 max-md:h-12 max-md:flex max-md:items-center max-md:justify-center">
        <div className="flex items-center gap-4 w-full h-12 max-md:gap-0 max-md:justify-center">
          <SearchIcon />
          <p className="max-md:hidden font-outfit text-primary text-base">
            Search
          </p>
        </div>
      </div>

      {/* user */}
      <div className="flex-shrink-0 w-[180px] max-md:w-12 max-md:h-12 border-2 border-primary rounded-full p-1 max-md:p-0 bg-darkPrimary">
        <div className="flex items-center gap-4 max-md:gap-0 max-md:w-full max-md:h-full">
          <p className="max-md:hidden w-2/3 text-center font-outfit text-base text-primary">
            Hi, {user.name}
          </p>
          <div className="w-12 h-12 max-md:w-full max-md:h-full rounded-full bg-avatar0 bg-center bg-cover"></div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
