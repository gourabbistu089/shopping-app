import React, { useState } from "react";
import { assets } from "../forever-assets/assets/frontend_assets/assets.js";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const [visible, setVisible]=useState(false)
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} className="w36" alt="" />

      <ul className="hidden sm:flex gap-5 text-sm to-gray-700">
        <NavLink
          to="/"
          className="flex flex-col items-center uppercase gap-1 group"
        >
          <p>Home</p>
          <hr className="w-3/5 border-none h-[2px] rounded-sm bg-gray-700 hidden group-hover:block group-hover:animate-slide" />
        </NavLink>
        <NavLink
          to="/collection"
          className="flex flex-col items-center uppercase gap-1 group"
        >
          <p>Collection</p>
          <hr className="w-3/5 border-none h-[2px] rounded-sm bg-gray-700 hidden group-hover:block group-hover:animate-slide" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col items-center uppercase gap-1 group"
        >
          <p>Contact</p>
          <hr className="w-3/5 border-none h-[2px] rounded-sm bg-gray-700 hidden group-hover:block group-hover:animate-slide" />
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col items-center uppercase gap-1 group"
        >
          <p>About</p>
          <hr className="w-3/5 border-none h-[2px] rounded-sm bg-gray-700 hidden group-hover:block group-hover:animate-slide" />
        </NavLink>
      </ul>
      <div className=" flex items-center gap-6 ">
        <img src= {assets.search_icon} className=" w-5 cursor-pointer " alt="" />

        <div className="group relative">
            <img src={assets.profile_icon} className=" w-5 cursor-pointer" alt="" />
            <div className=" group-hover:block hidden absolute right-0 pt-4 ">
                <div className=" flex flex-col w-36 gap-2 px-3 py-5  bg-slate-100 text-gray-500 rounded">
                <p className=" cursor-pointer hover:text-black ">My Profile</p>
                <p className=" cursor-pointer hover:text-black ">Order</p>
                <p className=" cursor-pointer hover:text-black ">Logout</p>
                </div>

            </div>

        </div>

        <Link  to="/cart" className=" relative">
        
        <img src={assets.cart_icon} className=" w-5 min-w-5" alt="" />
        <p className=" absolute right-[-5px]  bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square text-[8px] rounded-full">10</p>
        </Link>
        <img  onClick={()=>setVisible(true)} src={assets.menu_icon} className=" w-5 cursor-pointer sm:hidden " alt="" />
      </div>

      {/* Sidebar menu for small screnn */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className=" flex flex-col text-gray-600  cursor-pointer">
            <div onClick={()=>setVisible(false)} className=" flex items-center gap-4 p-3">
                <img src={assets.dropdown_icon} className=" h-4 rotate-180" alt="" />
                <p>Back</p>
            </div>

            <NavLink onClick={()=>setVisible(false)}  to= '/' className=' py-2 pl-6 border ' >Home</NavLink>
            <NavLink onClick={()=>setVisible(false)}  to= '/collection' className=' py-2 pl-6 border ' >Collection</NavLink>
            <NavLink  onClick={()=>setVisible(false)} to= '/contact' className=' py-2 pl-6 border ' >Contact</NavLink>
            <NavLink onClick={()=>setVisible(false)}  to= '/about' className=' py-2 pl-6 border ' >About</NavLink>

        </div>

      </div>
    </div>
  );
}

export default Navbar;
