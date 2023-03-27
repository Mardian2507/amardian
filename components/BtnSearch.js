import { useState } from "react";
import BtnClose from "./svgs/btnClose";
import SearchIcon from "./svgs/searchIcon";

export default function BtnSearch() {
  const [search, setSearch] = useState(false);

  return (
    <>
      <div className="px-3 z-40">
        <div className="flex items-center">
          <button
            className="flex items-center text-secondary dark:text-light dark:hover:bg-secondary hover:bg-gray-300 rounded-md md:border-primary md:border-2"
            onClick={() => setSearch(!search)}
          >
            <span className="text-xs px-1 text-secondary dark:text-light">
              Search...
            </span>
            <div>
              <SearchIcon />
            </div>
          </button>
        </div>

        <div
          className={`absolute w-full lg:w-3/4 right-0 px-3 transition-all ${
            search ? `top-[5px] md:top-[2px]` : `-top-40`
          }`}
        >
          <button
            className="absolute flex items-center bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-600 rounded-md top-[6px] mx-2 cursor-pointer text-secondary dark:text-light"
            onClick={() => setSearch(false)}
          >
            <div>
              <BtnClose />
            </div>
            <span className="text-xs pr-1 text-secondary dark:text-light">
              close
            </span>
          </button>

          <input
            className="text-secondary dark:text-light bg-light dark:bg-secondary  border-primary border-2 rounded-lg w-full px-[70px] py-2 lg:py-1 md:px-20 text-xs lg:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-secondary dark:focus:border-slate-300"
            placeholder="Search..."
          />

          <button
            className="absolute flex items-center bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-600 rounded-md right-12 md:right-14 top-[6px] mx-[-30px] md:mx-[-33px] cursor-pointer text-secondary dark:text-light"
            onClick={() => setSearch(false)}
          >
            <span className="text-xs text-secondary pl-1 dark:text-light">
              oke
            </span>
            <div>
              <SearchIcon />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
