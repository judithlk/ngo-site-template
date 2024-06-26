"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavPill from "./NavPill";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sm:h-[10%] md:h-[12%] w-[100%] bg-white shadow-md flex justify-between items-center fixed top-0 z-40">
      <div className="justify-center pl-[3%] flex items-center">
        <Image
          src={"/logo.png"}
          alt="logo"
          layout="relative"
          height={100}
          width={100}
        />
        <h1 className="hidden sm:block md:hidden lg:block ml-5 font-semibold lg:text-2xl xl:text-xl">
          Full Organization Name
        </h1>
      </div>
      <div className="h-full flex items-center pr-[5%] md:hidden" onClick={() => setToggle(!toggle)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`size-6 ${toggle == false ? "block" : "hidden"}`}
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`size-6 ${toggle == false ? "hidden" : "block"}`}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        className={`h-full ${
          toggle == false ? "hidden" : "flex-col"
        } min-w-[40%] lg:min-w-[40%] md:flex end-0 items-center justify-evenly lg:text-xl xl:text-base sm:mr-[2%]`}
      >
        <Link href="/">
          <NavPill>
            <h3>Home</h3>
          </NavPill>
        </Link>
        <Link href="/about">
          <NavPill>
            <h3>About Us</h3>
          </NavPill>
        </Link>
        <Link href="/impact">
          <NavPill>
            <h3>Impact</h3>
          </NavPill>
        </Link>
        <Link href="/contact">
          <NavPill>
            <h3>Contact</h3>
          </NavPill>
        </Link>
        <Link href="/action">
          <div className="p-3 bg-midblue font-semibold text-white hover:bg-darkblue">
            <h3 className="">Take Action</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
