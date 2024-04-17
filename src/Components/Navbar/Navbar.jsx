import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./Nav.css";
import { Link } from "react-scroll";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <div
      className={` w-full z-10 fixed text-[#fff] ${sticky ? "dark-nav" : ""}`}
    >
      <nav className=" mx-auto w-9/12 flex items-center justify-between  py-2">
        <img className="w-40" src={logo} alt="" />
        <ul className="flex items-center cursor-pointer text-base space-x-9 ">
          <li>
            <Link to="Hero" smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="Programs" smooth={true} offset={50} duration={500}>
              Program
            </Link>
          </li>
          <li>
            <Link to="About" smooth={true} offset={50} duration={500}>
              About us
            </Link>
          </li>
          <li>
            <Link to="Campus" smooth={true} offset={50} duration={500}>
              Campus
            </Link>
          </li>
          <li>
            <Link to="Testimonials" smooth={true} offset={50} duration={500}>
              Testimonial
            </Link>
          </li>
          <li className="bg-[#FFF] px-5 rounded-full py-3 text-[#212121]">
            <Link to="Contact" smooth={true} offset={50} duration={500}>
              {" "}
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
