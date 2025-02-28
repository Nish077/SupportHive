"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const { data: session } = useSession();
  let timeoutId = null;

  // Function to open dropdown
  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Clear timeout to prevent premature closing
    setDropdown(true);
  };

  // Function to close dropdown with a slight delay
  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setDropdown(false);
    }, 200); // Delay closing to allow smooth transition
  };

  return (
    <nav className="bg-[#0b042b] text-white flex justify-between px-4 h-16 items-center">
      <Link href="/" className="logo font-bold flex items-center justify-center">
      
        <Image src="/hive.png" alt="logo" width={50} height={50} />
        <span>SupportHive</span>
       
      </Link>

      <div className="relative">
        {session && (
          <>
            <div
              className="relative inline-block"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                type="button"
              >
                {session.user.email}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdown Menu (stays open when hovering) */}
              {dropdown && (
                <div className="z-10 absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => signOut()}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link href={"/dashboard"} className="mx-4">
              <Button text="Dashboard" />
            </Link>
          </>
        )}

        {session ? (
          <Button text="Logout" onClick={() => signOut()} />
        ) : (
          <Link href={"/login"}>
            <Button text="Login" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
