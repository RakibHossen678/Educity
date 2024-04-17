import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import Slider from "../Slider/Slider";

const Testimonials = () => {
  return (
    <div>
      <div className="text-center pb-10">
        <p className="text-[#212ea0] text-sm font-medium pb-1">TESTIMONIALS</p>
        <p className="text-3xl font-semibold">What Student Says Photos</p>
      </div>
      <div className="">
      <Slider></Slider>
      </div>
    </div>
  );
};

export default Testimonials;
