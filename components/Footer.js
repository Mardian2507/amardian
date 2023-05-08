import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="z-20 w-full bg-slate-100 dark:bg-slate-800 border-t-2 border-secondary/30 dark:border-light/30">
        <marquee direction="down" scrollamount="1" className="text-center">
          <p className="text-sm font-ubuntu">
            Copyright &copy; 2023 : Mar - Dian
          </p>
          <p className="text-sm font-ubuntu">Email : mardian.2507@gmail.com</p>
        </marquee>
      </div>
    </footer>
  );
}
