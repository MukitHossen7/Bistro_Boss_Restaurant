import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../SectionTitle/SectionTitle";
const Categorys = () => {
  return (
    <div className="mt-10 pb-32">
      <SectionTitle
        heading="ORDER ONLINE"
        subHeading="From 11:00am to 10:00pm"
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-6"
      >
        <SwiperSlide className="relative">
          <img
            src={slide1}
            className="w-full lg:h-[400px] object-cover rounded-md "
          ></img>
          <h3 className="text-lg lg:text-2xl uppercase text-center -mt-12 lg:-mt-20 text-white absolute left-0 right-0">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={slide2}
            className="w-full lg:h-[400px] object-cover rounded-md "
          ></img>
          <h3 className="text-lg lg:text-2xl uppercase text-center -mt-12 lg:-mt-20 text-white absolute left-0 right-0">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={slide3}
            className="w-full lg:h-[400px] object-cover rounded-md "
          ></img>
          <h3 className="text-lg lg:text-2xl uppercase text-center -mt-12 lg:-mt-20 text-white absolute left-0 right-0">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={slide4}
            className="w-full lg:h-[400px] object-cover rounded-md "
          ></img>
          <h3 className="text-lg lg:text-2xl uppercase text-center -mt-12 lg:-mt-20 text-white absolute left-0 right-0">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={slide5}
            className="w-full lg:h-[400px] object-cover rounded-md "
          ></img>
          <h3 className="text-lg lg:text-2xl uppercase text-center -mt-12 lg:-mt-20 text-white absolute left-0 right-0">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={slide2}
            className="w-full lg:h-[400px] object-cover rounded-md "
          ></img>
          <h3 className="text-lg lg:text-2xl uppercase text-center -mt-12 lg:-mt-20 text-white absolute left-0 right-0">
            Pizzas
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categorys;
