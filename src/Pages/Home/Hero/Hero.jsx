import React from "react";
import { Fade, Zoom } from "react-reveal";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import required modules
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { auth } from "../../../Firebase/Firebase.config";
import useProducts from "../../../Hooks/useProducts";
import Loader from "./../../../Components/Loader/Loader";
const Hero = () => {
  const navigate = useNavigate();
  const { products, loading } = useProducts();
  return (
    <HeroContainer className="bg-slate-50">
      <div className="container">
        <div className="hero-content py-20 sm:py-40 flex flex-col md:flex-row md:justify-between items-center ">
          <Fade left distance="20px">
            <div className="hero-text w-full text-center md:text-left mb-16 md:w-1/2 flex flex-col gap-3">
              <span className="text-xl">We will give you Brand Products</span>
              <h1 className="text-2xl sm:text-4xl md:text-5xl  font-semibold">
                Get your Best Product{" "}
                <span className="text-sky-500 block mt-4">
                  Wholesale prices
                </span>
              </h1>
              <p className="text-gray-500 leading-7 my-4 text-justify">
                Welcome to the akanda warehouse! here you will buy electronics
                products with value for money and we always give our customer
                latest and brand products and we import our products from
                canada. If you have interesting to buy our products wholesale
                money. you do it.
              </p>
              <div className="btn-groups flex flex-wrap justify-center md:justify-start items-center gap-3">
                <a
                  href="#best"
                  className="bg-sky-500 px-6 py-3 rounded text-white active:scale-95 transition-all"
                >
                  Latest Products
                </a>
                {auth?.currentUser && (
                  <button
                    onClick={() => navigate(`/add-product`)}
                    className="px-7  hover:bg-sky-500 hover:text-white py-3 border rounded border-sky-500 text-sky-500 transition-all"
                  >
                    Add Product
                  </button>
                )}
              </div>
            </div>
          </Fade>
          <Zoom right>
            <div className="hero-image w-full md:w-2/5 ">
              {loading ? (
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="mySwiper"
                >
                  {products?.slice(0, 12).map((product) => (
                    <SwiperSlide key={product._id}>
                      <div className="image">
                        <img src={product?.imageUrl} alt={product?.name} />
                      </div>
                      <div className="details  p-2">
                        <h3 className="text-xl ">
                          {product?.name.slice(0, 26) + "..."}{" "}
                        </h3>
                        <div className="inner-details flex justify-between items-center my-1">
                          <span className="text-sky-500">
                            ${product?.price}
                          </span>
                          <span>{product?.stockQty}pcs</span>
                        </div>
                        <button
                          onClick={() => navigate(`/inventory/${product?._id}`)}
                          className="bg-sky-400 px-3 py-1 mt-1 rounded text-white"
                        >
                          Manage
                        </button>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <Loader />
              )}
              <h1 className="text-2xl text-center my-6 font-semibold">
                Check Out Top 12 Products{" "}
              </h1>
            </div>
          </Zoom>
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
    @media (max-width: 500px) {
      width: 200px;
      height: auto;
      .swiper-slide {
        .image {
          height: 160px;
        }
      }
    }
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
