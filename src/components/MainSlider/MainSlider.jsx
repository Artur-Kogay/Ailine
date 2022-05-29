import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import style from "./MainSlider.module.scss";
import PhotoForSlide1 from "../../assets/jpg/mainBackground.jpg";

const MainSlider = () => {
  return (
    <div className={style.swiperBlock}>
      <Swiper slidesPerView={2} navigation={true} modules={[Navigation]} className={style.swiper}>
        <SwiperSlide className={style.swiperItem}>
          <div className={style.background}/>
          <div className={"container"}>
            <div className={style.content}>
              <h1>Ваш надежный партнер!</h1>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci, labore. Lorem ipsum dolor <br /> sit amet, consectetur
                adipisicing elit. Laborum, rerum.
              </h3>
              <a href="#">Contact us</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperItem}>
          <div className={style.background}/>
          <div className={"container"}>
            <div className={style.content}>
              <h1>Ваш надежный партнер!</h1>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci, labore. Lorem ipsum dolor <br /> sit amet, consectetur
                adipisicing elit. Laborum, rerum.
              </h3>
              <a href="#">Contact us</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
