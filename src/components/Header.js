import React from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/client";
import {
  LocationMarkerIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  const [session] = useSession("");

  return (
    <header>
      <div className="flex px-0 py-2 items-center flex-grow bg-amazon_blue">
        <div className="m-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer "
          />
        </div>
        <div className="text-white  text-sm link mr-4 flex items-end">
          <LocationMarkerIcon className="h-6 mr-[2px]" />
          <div>
            <p>Deliver to </p>
            <p className="font-bold flex">Pakistan</p>
          </div>
        </div>
        {/* search */}
        <div className="hidden sm:flex h-10  items-center rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 cursor-pointer ">
          <input
            type="text"
            className="flex-grow p-4 flex-shrink  h-full rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-3" />
        </div>
        {/* {righ hand side} */}
        <div className="text-white flex space-x-6 items-center text-xs mx-6 whitespace-nowrap">
          <div onClick={!session ? signIn : signOut} className="link">
            <p className="font-semibold">
              {session ? `Hello, ${session.user.name}` : "Sign in"}
            </p>
            <p className="font-bold md:text-sm">Accounts & Lists</p>
          </div>
          <div className="link">
            <p>Return </p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>
          <div className="link flex items-center relative">
            <span className="absolute top-0 right-0 md:mr-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-bold md:text-sm hidden md:inline mt-2">Cart</p>
          </div>
        </div>
      </div>
      {/* 2nd header */}
      <div className="flex px-2 md:px-7 space-x-3 py-1 bg-amazon_blue-light text-white items-center text-base ">
        <p className="flex link items-center">
          <MenuIcon className="h-6 mr-[6px] md:mr-1" />
          All
        </p>
        <p className="flex link">Today's Deals</p>
        <p className="flex link">Customer Service</p>
        <p className="flex link">Registry</p>
        <p className="link hidden md:inline">Gift Cards</p>
        <p className="flex link">Sells</p>
      </div>
    </header>
  );
}

export default Header;
