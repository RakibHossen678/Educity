import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Slider from "./Components/Slider/Slider";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <div className=" font-outfit bg-[#f5f5f5] ">
      <div className="">
        <Navbar></Navbar>
        <Hero></Hero>
        <Programs></Programs>
        <About></About>
        <Campus></Campus>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
