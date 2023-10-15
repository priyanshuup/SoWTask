import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import axios from "axios";

import { Oval } from "react-loader-spinner";

const OurServices = () => {
  let [datas, setdata] = useState([]);

  /* Making API request */
  useEffect(function () {
    (() => {
      axios.get("https://web-dev.dev.kimo.ai/v1/highlights").then((res) => {
        setdata(res.data);
      });
      // console.log(datas);
    })();
  });

  return (
    <div className="servicesmain">
      <h1>Our Services</h1>
      <div className="swer">
      
      <Swiper
        spaceBetween={40}
        centeredSlides={true}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3,
          },
        }}
        fade = {true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="servicesmane">
          {datas.length === 0 ? (
            <Oval
              height="80"
              width="80"
              radius="9"
              color="gray"
              secondaryColor="gray"
              ariaLabel="loading"
            />
          ) : (
            datas.map((items) => {
              return (
                  <SwiperSlide>
              <div className="itemdiv">
                <div className="Image">
                  <img src={items.image} alt="imae aana tha idhar" />
                </div>
                <div className="text">
                  <h3>{items.description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, voluptates placeat quibusdam vitae quas nisi error suscipit ducimus! Voluptatum fugit unde tempore voluptates quo maxime aperiam porro quod explicabo </h3>
                </div>
                <div className="Title">
                  <h2>{items.title}</h2>
                </div>
              </div>           
                  </SwiperSlide>
              );
            })
          )}
        </div>
      </Swiper>
      </div>
    </div>
  );
};

export default OurServices;
