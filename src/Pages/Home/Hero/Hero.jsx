import React from "react";
import styled from "styled-components";
// import required modules
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  return (
    <HeroContainer className="bg-slate-50">
      <div className="container">
        <div className="hero-content py-40 flex justify-between items-center ">
          <div className="hero-text w-1/2 flex flex-col gap-3">
            <span className="text-xl">We will give you Brand Products</span>
            <h1 className="text-5xl leading-tight  font-semibold">
              Get your Best Product{" "}
              <span className="text-green-500">Wholesale prices</span>
            </h1>
            <p className="text-gray-500 leading-7 my-4">
              Welcome to the akanda warehouse! here you will buy electronics
              products with value for money and we always give our customer
              latest and brand products and we import our products from canada.
              If you have interesting to buy our products wholesale money. you
              do it.
            </p>
            <div className="btn-groups flex items-center gap-3">
              <button className="bg-green-400 px-6 py-3 rounded text-white active:scale-95 transition-all">
                Best Selling
              </button>
              <button className="px-7  hover:bg-green-400 hover:text-white py-3 border rounded border-green-400 text-green-400 transition-all">
                Start Buy
              </button>
            </div>
          </div>
          <div className="hero-image w-2/5">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="image">
                  <img
                    src="https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"
                    alt=""
                  />
                </div>
                <div className="details  p-2">
                  <h3 className="text-2xl ">Laptop</h3>
                  <div className="inner-details flex justify-between items-center my-1">
                    <span className="text-green-400">$343</span>
                    <span>20pcs</span>
                  </div>
                  <button className="bg-gray-300 px-3 py-1 mt-1 rounded">
                    Update
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image">
                  <img
                    src="https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"
                    alt=""
                  />
                </div>
                <div className="details  p-2">
                  <h3 className="text-2xl ">Laptop</h3>
                  <div className="inner-details flex justify-between items-center my-1">
                    <span className="text-green-400">$343</span>
                    <span>20pcs</span>
                  </div>
                  <button className="bg-gray-300 px-3 py-1 mt-1 rounded">
                    Update
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image">
                  <img
                    src="https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"
                    alt=""
                  />
                </div>
                <div className="details  p-2">
                  <h3 className="text-2xl ">Laptop</h3>
                  <div className="inner-details flex justify-between items-center my-1">
                    <span className="text-green-400">$343</span>
                    <span>20pcs</span>
                  </div>
                  <button className="bg-gray-300 px-3 py-1 mt-1 rounded">
                    Update
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image">
                  <img
                    src="https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"
                    alt=""
                  />
                </div>
                <div className="details  p-2">
                  <h3 className="text-2xl ">Laptop</h3>
                  <div className="inner-details flex justify-between items-center my-1">
                    <span className="text-green-400">$343</span>
                    <span>20pcs</span>
                  </div>
                  <button className="bg-gray-300 px-3 py-1 mt-1 rounded">
                    Update
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image">
                  <img
                    src="https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"
                    alt=""
                  />
                </div>
                <div className="details  p-2">
                  <h3 className="text-2xl ">Laptop</h3>
                  <div className="inner-details flex justify-between items-center my-1">
                    <span className="text-green-400">$343</span>
                    <span>20pcs</span>
                  </div>
                  <button className="bg-gray-300 px-3 py-1 mt-1 rounded">
                    Update
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image">
                  <img
                    src="https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"
                    alt=""
                  />
                </div>
                <div className="details  p-2">
                  <h3 className="text-2xl ">Laptop</h3>
                  <div className="inner-details flex justify-between items-center my-1">
                    <span className="text-green-400">$343</span>
                    <span>20pcs</span>
                  </div>
                  <button className="bg-gray-300 px-3 py-1 mt-1 rounded">
                    Update
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
            <h1 className="text-2xl text-center my-6 font-semibold">
              Best Selling{" "}
            </h1>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};
const HeroContainer = styled.section`
  position: relative;
  .swiper {
    width: 400px;
    height: 450px;
  }

  .swiper-slide {
    background-color: #fff !important;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    border-radius: 5px;
    padding: 1rem;
    .image {
      height: 300px;
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .swiper-slide:nth-child(1n) {
    background-color: rgb(206, 17, 17);
  }

  .swiper-slide:nth-child(2n) {
    background-color: rgb(0, 140, 255);
  }

  .swiper-slide:nth-child(3n) {
    background-color: rgb(10, 184, 111);
  }

  .swiper-slide:nth-child(4n) {
    background-color: rgb(211, 122, 7);
  }

  .swiper-slide:nth-child(5n) {
    background-color: rgb(118, 163, 12);
  }

  .swiper-slide:nth-child(6n) {
    background-color: rgb(180, 10, 47);
  }

  .swiper-slide:nth-child(7n) {
    background-color: rgb(35, 99, 19);
  }

  .swiper-slide:nth-child(8n) {
    background-color: rgb(0, 68, 255);
  }

  .swiper-slide:nth-child(9n) {
    background-color: rgb(218, 12, 218);
  }

  .swiper-slide:nth-child(10n) {
    background-color: rgb(54, 94, 77);
  }
`;
export default Hero;
