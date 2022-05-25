import React from "react";
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import style from "./MainSlider.module.scss"
import PhotoForSlide1 from "../../assets/jpg/mainBackground.jpg"

const MainSlider = () => {
  return (
    <div className={style.swiperBlock}>
      <Swiper navigation={true} modules={[Navigation]} className={style.swiper}>
        <SwiperSlide><Image src={PhotoForSlide1} alt={"slide 1"}/></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
