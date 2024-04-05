import logo from "../../assets/logo.png";
import "./Nav.css";
const Navbar = () => {
  return (
    <div className=" w-full z-10 fixed text-[#fff]">
      <nav className=" mx-auto w-9/12 flex items-center justify-between  py-3">
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
