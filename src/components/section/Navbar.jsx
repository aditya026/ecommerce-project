import { useGSAP } from "@gsap/react";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";




const Navbar = () => {
  return (
    <div className="fullNav flex h-14 items-center justify-between px-10 font-arial font-roboto">
      <div className="list-none flex gap-5 uppercase text-sm font-normal">
        <li><a className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#3b6638ff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="#">men</a></li>
        <li><a className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#3b6638ff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="#">women</a></li>
        <li><a className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#3b6638ff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="#">kids</a></li>
        <li><a className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#3b6638ff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="#">socks</a></li>
      </div>
      <div><img className="invert-0" src="/logo.png" alt="image" /></div>
      <div className="flex items-center justify-center uppercase text-sm font-normal">
        <div className="list-none gap-5 flex p-3">
        <li><a className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#3b6638ff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="#">Sustainability</a></li>
        <li><a className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#3b6638ff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="#">return</a></li>
        <li><a className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#3b6638ff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="#">store</a></li>
        </div>
        <div className="flex gap-5">
            <button><FaRegUser /> </button>
            <button><IoSearch /></button>
            <button><RiShoppingCartLine /></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
