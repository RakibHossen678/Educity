import "./Program.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import pro_icon_1 from "../../assets/program-icon-1.png";
import pro_icon_2 from "../../assets/program-icon-2.png";
import pro_icon_3 from "../../assets/program-icon-3.png";
const Programs = () => {
  return (
    <div>
      <div className="Programs text-center pt-10">
        <p className="text-[#212ea0] text-sm font-medium pb-1">OUR PROGRAM</p>
        <p className="text-3xl font-semibold">What We Offer</p>
      </div>
      <div className="py-20 mx-auto w-9/12 flex  justify-between items-center gap-20 text-white ">
        <div className="relative program group">
          <img className="rounded-2xl   z-0 block " src={program_1} alt="" />
          <div className="absolute caption opacity-0  rounded-2xl top-0 left-0 bottom-0 right-0 bg-[rgba(0,15,152,0.3)] z-10 flex flex-col justify-center items-center">
            <img className="w-16 mb-2" src={pro_icon_1} alt="" />
            <p>Graduation Degree</p>
          </div>
        </div>
        <div className="relative program group">
          <img className="rounded-2xl  " src={program_2} alt="" />
          <div className="absolute caption opacity-0   top-0 rounded-2xl left-0 bottom-0 right-0 bg-[rgba(0,15,152,0.3)] flex flex-col justify-center items-center">
            <img className="w-16" src={pro_icon_2} alt="" />
            <p>Master Degree</p>
          </div>
        </div>
        <div className="relative program group">
          <img className="rounded-2xl  " src={program_3} alt="" />
          <div className="absolute caption   rounded-2xl  bg-[rgba(0,15,152,0.3)] top-0 left-0 bottom-0 opacity-0 right-0 flex flex-col justify-center items-center">
            <img className="w-20" src={pro_icon_3} alt="" />
            <p>Post Graduation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
