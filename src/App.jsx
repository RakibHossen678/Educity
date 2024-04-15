import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";

function App() {
  return (
    <div className=" font-outfit bg-[#f5f5f5] ">
      <div className="">
        <Navbar></Navbar>
        <Hero></Hero>
        <Programs></Programs>
      </div>
    </div>
  );
}

export default App;
