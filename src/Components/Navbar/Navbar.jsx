import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./Nav.css";
const Navbar = () => {
  const [sticky , setSticky]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])
  return (
    <div className={` w-full z-10 fixed text-[#fff] ${sticky ?'dark-nav':'' }`}>
      <nav className=" mx-auto w-9/12 flex items-center justify-between  py-2">
        <img className="w-40" src={logo} alt="" />
        <ul className="flex items-center cursor-pointer text-base space-x-9 ">
          <li>Home</li>
          <li>Program</li>
          <li>About us</li>
          <li>Campus</li>
          <li>Testimonial</li>
          <li className="bg-[#FFF] px-5 rounded-full py-3 text-[#212121]">Contact us</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
