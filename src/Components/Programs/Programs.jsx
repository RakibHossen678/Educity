import "./Program.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
const Programs = () => {
  return (
    <div >
        <div className="text-center pt-10">
        <p className="text-[#212ea0] text-sm font-medium">OUR PROGRAM</p>
        <p className="text-3xl font-semibold">What We Offer</p>
      </div>
      <div className="py-20 mx-auto w-9/12 flex  justify-between items-center gap-20 ">
        <div>
          <img className="rounded-2xl" src={program_1} alt="" />
        </div>
        <div>
          <img className="rounded-2xl" src={program_2} alt="" />
        </div>
        <div>
          <img className="rounded-2xl" src={program_3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Programs;
