import React from "react";
import { BsChatLeftQuote } from "react-icons/bs";
import styled from "styled-components";
// import required modules
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
const Reviews = () => {
  return (
    <ReviewsContainer className="reviews py-6">
      <div className="container">
        <div className="title py-6">
          <span className="text-lg uppercase text-gray-500">
            What customers says about us?
          </span>
          <h2 className="text-3xl uppercase text-slate-700 font-semibold">
            Customer Feedback
          </h2>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide-content flex gap-6">
              <span className="icon">
                <BsChatLeftQuote className="text-3xl" />
              </span>
              <div className="details border-l pl-7">
                <blockquote className="text-sm leading-7">
                  The installation crew is hard working and reliable. They start
                  on time and are out as quick as possible. The sales staff is
                  ready to go one step further. Even when one sales person had a
                  baby and was out of the office, they were more than helpful.
                </blockquote>
                <div className="user-details flex gap-4 my-4 items-center">
                  <div className="avatar">
                    <img
                      src="http://webdesign-finder.com/rentiger/wp-content/uploads/2021/08/testimonials-03-1.png"
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">Anika Rahman</h3>
                    <span className="uppercase text-sm text-gray-500">
                      Client
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content flex gap-6">
              <span className="icon">
                <BsChatLeftQuote className="text-3xl" />
              </span>
              <div className="details border-l pl-7">
                <blockquote className="text-sm leading-7">
                  This vendors is so punctual to delivery all the products on
                  way. This is absolutely recommended for you guys. They
                  behavior just wow. you can check out of yourself and make
                  decision what do you wan. But in my case it's highly
                  recommended.
                </blockquote>
                <div className="user-details flex gap-4 my-4 items-center">
                  <div className="avatar">
                    <img
                      src="http://webdesign-finder.com/rentiger/wp-content/uploads/2021/08/testimonials-04-1.png"
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">Anika Rahman</h3>
                    <span className="uppercase text-sm text-gray-500">
                      Client
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content flex gap-6">
              <span className="icon">
                <BsChatLeftQuote className="text-3xl" />
              </span>
              <div className="details border-l pl-7">
                <blockquote className="text-sm leading-7">
                  They cleaned up after they were done and left my shop cleaner
                  than what it was before they started, and finished sooner than
                  expected! You just don’t run across that type of service much
                  anymore in today’s world. I just wanted to pass along my
                  thanks.
                </blockquote>
                <div className="user-details flex gap-4 my-4 items-center">
                  <div className="avatar">
                    <img
                      src="http://webdesign-finder.com/rentiger/wp-content/uploads/2021/08/testimonials-02-1.png"
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">Anika Rahman</h3>
                    <span className="uppercase text-sm text-gray-500">
                      Client
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content flex gap-6">
              <span className="icon">
                <BsChatLeftQuote className="text-3xl" />
              </span>
              <div className="details border-l pl-7">
                <blockquote className="text-sm leading-7">
                  Scott has always been a great resource to work with. By the
                  time I need his help most of the time I needed it yesterday.
                  He has always made himself available to my needs immediately
                  and accurately.
                </blockquote>
                <div className="user-details flex gap-4 my-4 items-center">
                  <div className="avatar">
                    <img
                      src="http://webdesign-finder.com/rentiger/wp-content/uploads/2021/08/testimonials-01-1.png"
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">Ashik Rahman</h3>
                    <span className="uppercase text-sm text-gray-500">
                      Client
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
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
