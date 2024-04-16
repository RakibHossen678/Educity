import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

import { Pagination } from "swiper/modules";
const Slider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper slide"
      >
        <SwiperSlide className="w-[450px] my-10">
          <div className=" p-6 rounded-md shadow-md ">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={user_1}
                alt=""
                className="object-cover object-center border-4 border-[rgba(0,15,152,0.3)] w-20 rounded-full bg-gray-500"
              />
              <div>
                <h1>Emily Williams</h1>
                <h1>Edusity, USA</h1>
              </div>
            </div>

            <p className="">
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[450px] my-10">
          <div className=" p-6 rounded-md shadow-md ">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={user_2}
                alt=""
                className="object-cover object-center border-4 border-[rgba(0,15,152,0.3)] w-20 rounded-full bg-gray-500"
              />
              <div>
                <h1>Emily Williams</h1>
                <h1>Edusity, USA</h1>
              </div>
            </div>
            <p className="">
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[450px] my-10">
          <div className=" p-6 rounded-md shadow-md ">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={user_3}
                alt=""
                className="object-cover object-center border-4 border-[rgba(0,15,152,0.3)] w-20 rounded-full bg-gray-500"
              />
              <div>
                <h1>Emily Williams</h1>
                <h1>Edusity, USA</h1>
              </div>
            </div>
            <p className="">
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[450px] my-10">
          <div className=" p-6 rounded-md shadow-md ">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={user_4}
                alt=""
                className="object-cover object-center border-4 border-[rgba(0,15,152,0.3)] w-20 rounded-full bg-gray-500"
              />
              <div>
                <h1>William Jackson</h1>
                <h1>Edusity, USA</h1>
              </div>
            </div>
            <p className="">
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
