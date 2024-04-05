import "./Hero.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="Hero w-full min-h-screen bg-cover bg-center text-white flex flex-col justify-center items-center">
      <div className="text-center max-w-4xl space-y-5">
        <h1 className="text-6xl font-bold tracking-wider">We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="bg-white flex items-center px-6 rounded-full   py-4 mx-auto text-black">
          Explore more <FaLongArrowAltRight className="ml-2 text-xl text-gray-600"></FaLongArrowAltRight>{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
