import React from "react";
import { BsChatLeftQuote } from "react-icons/bs";
import { Fade } from "react-reveal";
import styled from "styled-components";
// import required modules
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Loader from "../../../Components/Loader/Loader";
import useReviews from "../../../Hooks/useReviews";
const Reviews = () => {
  const [reviews, loading] = useReviews();

  return (
    <ReviewsContainer className="reviews py-6">
      <div className="container">
        <Fade bottom distance="50px">
          <div className="title py-6">
            <span className="text-lg uppercase text-gray-500">
              What customers says about us?
            </span>
            <h2 className="text-3xl uppercase text-slate-700 font-semibold">
              Customer Feedback
            </h2>
          </div>
        </Fade>
        <Fade bottom distance="50px">
          {loading ? (
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              breakpoints={{
                200: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              className="mySwiper"
            >
              {reviews?.map((review) => (
                <SwiperSlide key={review._id}>
                  <div className="slide-content flex gap-6">
                    <span className="icon">
                      <BsChatLeftQuote className="text-3xl" />
                    </span>
                    <div className="details border-l pl-7">
                      <blockquote className="text-sm leading-7">
                        {review?.reviewsText}
                      </blockquote>
                      <div className="user-details flex gap-4 my-4 items-center">
                        <div className="avatar">
                          <img src={review?.avatar} alt="avatar" />
                        </div>
                        <div>
                          <h3 className="text-base font-medium">
                            {review?.name}
                          </h3>
                          <span className="uppercase text-sm text-gray-500">
                            {review?.designation}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Loader />
          )}
        </Fade>
      </div>
    </ReviewsContainer>
  );
};
const ReviewsContainer = styled.section`
  position: relative;
  .swiper-wrapper {
    padding: 3rem 0rem;
  }
  .swiper-slide {
    display: grid;
    place-items: center;
    padding: 2rem;
  }
`;
export default Reviews;
