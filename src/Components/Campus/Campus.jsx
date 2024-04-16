import "./Campus.css";
import { FaArrowRightLong } from "react-icons/fa6";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
const Campus = () => {
  return (
    <div className="pb-20">
      <div className="text-center pt-10">
        <p className="text-[#212ea0] text-sm font-medium pb-1">GALLERY</p>
        <p className="text-3xl font-semibold">Campus Photos</p>
      </div>
      <div className="flex justify-between items-center w-9/12 mx-auto py-10 gap-5 ">
        <div>
          <img className="rounded-xl" src={gallery_1} alt="" />
        </div>
        <div>
          <img className="rounded-xl"  src={gallery_2} alt="" />
        </div>
        <div>
          <img className="rounded-xl" src={gallery_3} alt="" />
        </div>
        <div>
          <img className="rounded-xl" src={gallery_4} alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center text-white">
        <button className="bg-[#212EA0] py-3 px-6 rounded-3xl flex items-center ">See more here <FaArrowRightLong className="" /></button>
      </div>
    </div>
  );
};

export default Campus;
