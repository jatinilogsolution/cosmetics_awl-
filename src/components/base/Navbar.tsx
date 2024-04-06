"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import { DrawerBar } from "./Drawer";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className=" flex items-center justify-between px-6 lg:px-10 py-6 border">
      <Image
        onClick={() => router.push("/")}
        src={"/awllogo.png"}
        alt="AWL INDIA Logo"
        width={100}
        height={100}
        // className=" h-10 w-auto"
      />
      <div className=" hidden lg:flex gap-x-10 items-center font-medium">
        <Link
          href={"/"}
          className={` ${pathname == "/" ? " text-[#f44336] " : ""}`}
        >
          Home
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger
            className={`outline-none ${
              pathname.includes("about-us") ? "text-[#f44336]" : ""
            }  `}
          >
            About us
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" rounded-[7px]">
            <DropdownMenuItem
              onClick={() => router.push("/about-us/overview")}
              className={` font-medium ${
                pathname.includes("overview") ? "text-[#f44336]" : ""
              }`}
            >
              Overview
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push("/about-us/our-team")}
              className={` font-medium ${
                pathname.includes("our-team") ? "text-[#f44336]" : ""
              }`}
            >
              Our Team
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push("/about-us/rewards")}
              className={`font-medium ${
                pathname.includes("rewards") ? "text-[#f44336]" : ""
              }`}
            >
              Reward & Recognition
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push("/about-us/mission")}
              className={` font-medium ${
                pathname.includes("mission") ? "text-[#f44336]" : ""
              }`}
            >
              Mission
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link
          href={"/services"}
          className={` font-medium ${
            pathname.includes("services") ? "text-[#f44336]" : ""
          }`}
        >
          Services
        </Link>
        <Link
          href={"/case-studies"}
          className={` font-medium ${
            pathname.includes("case-studies") ? "text-[#f44336]" : ""
          }`}
        >
          Case Studies
        </Link>
        <Link
          href={"/contact-us"}
          className={` py-2 px-4 font-bold rounded-[7px] ${
            pathname.includes("contact-us")
              ? "text-[#f44336] bg-white"
              : "  bg-white text-black "
          }`}
        >
          Contact us
        </Link>
      </div>
      <div className=" block lg:hidden">
        <DrawerBar />
      </div>
    </nav>
  );
};

export default Navbar;
