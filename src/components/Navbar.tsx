"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import logo from "@/../public/assets/logo.png";
import Image from "next/image";
import { signOut, signIn, useSession } from "next-auth/react";

const Navbar = ({ className }: { className?: string }) => {
  // const { status, data: session } = useSession();
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-[90%] mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive} className="flex flex-row justify-between">
        <Image src={logo} alt="logo" height={30} />
        <div className="flex flex-row justify-center gap-10">
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>
          <MenuItem setActive={setActive} active={active} item="Explore">
            {/* <HoveredLink href="/explore">All my content</HoveredLink> */}
          </MenuItem>
          <Link href={"/about"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="About"
            ></MenuItem>
          </Link>
        </div>
        <MenuItem setActive={setActive} active={active} item="Profile">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/myprofile">My Profile</HoveredLink>
            <HoveredLink href="/login">Login</HoveredLink>
            <HoveredLink href="/signup">Signup</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
