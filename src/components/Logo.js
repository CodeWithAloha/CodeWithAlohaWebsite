import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../images/logo.png";

const Logo = () => {
  return (
    <Link href="/" whilehover={{ scale: 1.5 }}>
      <Image
        alt="Code with Aloha logo"
        src={logoImg}
        width={500}
        height={500}
        className="w-full xl:max-h-24 max-h-[3rem] cursor-pointer m-2 hover:animate-pulse"
      />
    </Link>
  );
};

export default Logo;
