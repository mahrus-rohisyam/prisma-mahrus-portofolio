"use client";
import datas from "@/data/Header.json";
import Link from "next/link";
import Image from "./Image";
import Logo from "@/assets/mahrus-rohisyam.svg";
import { useState } from "react";

const Header = () => {
  return (
    <nav className="drawer bg-transparent">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 px-5 lg:px-24">
          <Link href="/" className="flex-1 gap-5">
            <Image
              src={Logo}
              alt="Logo Mahrus Rohisyam"
              className="h-20 w-fit "
            />
            <span>Mahrus Rohisyam</span>
          </Link>
          <div className="flex-none md:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-none' hidden md:block">
            <ul className="menu menu-horizontal">
              {datas.primary.map((value, index) => {
                return (
                  <li key={index}>
                    <Link href={value.url}>
                      {value.pathname}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side z-50 md:hidden">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {datas.primary.map((value, index) => {
            return (
              <li key={index}>
                <Link href={value.url}>
                  {value.pathname}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
