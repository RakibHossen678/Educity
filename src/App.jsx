import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className=" font-outfit bg-[#f5f5f5] ">
      <div className="">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
    </div>
  );
}

export default App;
