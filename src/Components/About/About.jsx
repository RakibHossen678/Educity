import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = () => {
  return (
    <div className="About py-24 flex items-center justify-between  w-9/12 mx-auto">
      <div className="w-[40%] relative ">
        <img className="w-full rounded-xl" src={about_img} alt="" />
        <img className="absolute w-14 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" src={play_icon} alt="" />
      </div>
      <div className="w-[56%]">
        <h3 className="font-semibold text-lg text-[#212EA0]" >ABOUT UNIVERSITY</h3>
        <h3 className="text-4xl my-2 max-w-[400px] font-bold text-[#000f38]">Nurturing Tomorrow's Leaders Today</h3>
        <p className="text-[#676767] mb-4">
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p className="text-[#676767] mb-4">
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p className="text-[#676767] mb-4">
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
