import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import icon from "../../../src/assets/icon/Group.png";
import "@smastrom/react-rating/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FadeLoader } from "react-spinners";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/allReview")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <FadeLoader color="#11f6c6" />
      </div>
    );
  }
  return (
    <div className="mt-24">
      <SectionTitle
        subHeading="What Our clients Say"
        heading="Testimonials"
      ></SectionTitle>
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mt-12"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center text-center px-12 lg:px-24">
              <div className="w-32 text-[#CD9003]">
                <Rating
                  style={{
                    maxWidth: 180,
                    color: "#CD9003",
                  }}
                  value={review?.rating}
                  readOnly
                />
              </div>
              <img src={icon} className="pt-6 w-12 lg:w-14"></img>
              <p className="text-base lg:text-lg  pt-4">{review?.details}</p>
              <h3 className="text-2xl lg:text-3xl text-[#CD9003] font-medium pt-2">
                {review?.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;

//    <div className="flex flex-col items-center text-center">
//               <Rating
//                 style={{
//                   maxWidth: 180,
//                   color: "#CD9003",
//                 }}
//                 value={review?.rating}
//                 readOnly
//               />
//               <img src={icon} className="pt-10 w-16"></img>
//               <p className="text-base lg:text-xl pt-8">{review?.details}</p>
//               <h3 className="text-xl lg:text-3xl text-[#CD9003] font-medium pt-2">
//                 {review?.name}
//               </h3>
//             </div>
