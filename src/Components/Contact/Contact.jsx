import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import email from "../../assets/msg-icon.png";
import { useState } from "react";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2a4e3286-901e-4419-b850-0fd5498bf82d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="py-20">
      <div className="text-center pb-10">
        <p className="text-[#212ea0] text-sm font-medium pb-1">CONTACT US</p>
        <p className="text-3xl font-semibold">Get in Touch</p>
      </div>
      <section className="py-6 ">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <div className="flex items-center space-x-4 pb-2">
              <h1 className="text-2xl font-bold">Send us a message</h1>
              <img className="w-10" src={email} alt="" />
            </div>
            <p className="pt-2 pb-4 text-gray-500">
              Feel free to reach out through contact form or find our contact
              information below. Your feedback, questions, and suggestions are
              important to us as we strive to provide exceptional service to our
              university community.
            </p>
            <div className="space-y-4">
              <p className="flex items-center space-x-2">
                <MdEmail className="text-3xl text-[#212ea0] " />
                <span>Contact@Educity.dev</span>
              </p>
              <p className="flex items-center space-x-2">
                <IoCall className="text-3xl text-[#212ea0] " />

                <span>+1 123-456-7890</span>
              </p>
              <p className="flex items-center space-x-2">
                <FaLocationDot className="text-3xl text-[#212ea0] " />
                <span className="max-w-[300px]">
                  77 Massachusetts Ave, Cambridge MA 02139, United States
                </span>
              </p>
            </div>
          </div>
          <div>
            <form onSubmit={onSubmit}
              className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
            >
              <label className="block">
                <span className="mb-1 text-gray-500 ">Your name</span>
                <input
                  required
                  type="text"
                  placeholder="Enter your name"
                  className="block w-full  shadow-sm py-3 px-1 bg-[#ebecfe] border-none outline-none "
                />
              </label>
              <label className="block">
                <span className="mb-1">Phone Number</span>
                <input
                  required
                  type="number"
                  placeholder="Enter your mobile number"
                  className="block w-full  shadow-sm py-3 px-1 bg-[#ebecfe] border-none outline-none  "
                />
              </label>
              <label className="block">
                <span className="mb-1">Your Email </span>
                <input
                  required
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full  shadow-sm py-3 px-1 bg-[#ebecfe] border-none outline-none "
                />
              </label>
              <label className="block">
                <span className="mb-1">Write your message here</span>
                <textarea
                  required
                  rows="4"
                  placeholder="Enter your message"
                  className="block w-full  py-3 px-2 bg-[#ebecfe] border-none outline-none "
                ></textarea>
              </label>
              <div>
                <button className="flex items-center  px-8 py-3 text-white bg-[#212ea0] rounded-full">
                  Submit now <FaArrowRightLong className="text-lg ml-3 " />
                </button>
              </div>
            </form>
            <span className="block my-5  ml-7">{result}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
