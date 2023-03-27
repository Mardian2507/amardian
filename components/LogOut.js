import { auth } from "config/firebase";
import React from "react";
import Greeting from "./Greeting";
import LogOutIcon from "./svgs/logOutIcon";

export default function LogOut() {
  const signOut = () => {
    signOut(auth);
  };

  const { displayName } = auth.currentUser;

  return (
    <>
      <div className="w-full flex justify-center px-5">
        <div className="flex items-center">
          <Greeting />
          <span className="px-2 -mt-[6px] font-neuton font-semibold text-base">
            {displayName}
          </span>
        </div>
        <button
          onClick={() => auth.signOut()}
          className="flex justify-center items-center p-2 group"
        >
          <LogOutIcon className="group-hover:translate-x-6 ease-in-out duration-300" />
          <p className="text-xs px-2">
            <span className="group-hover:opacity-0">Log</span>
            <span className="group-hover:font-bold ease-in-out duration-300">
              Out
            </span>
          </p>
        </button>
      </div>
    </>
  );
}
