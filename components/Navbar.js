import React from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center bg-gray-600 text-gray-200 select-none text-xl lg:text-2xl">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <h2
          onClick={() => router.push(`?genre=${key}`)}
          className="m-6 cursor-pointer hover:text-white active:text-yellow-300"
          key={key}
        >
          {title}
        </h2>
      ))}
    </div>
  );
};

export default Navbar;
