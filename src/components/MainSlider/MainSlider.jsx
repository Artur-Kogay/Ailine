import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import style from "./MainSlider.module.scss";
import PhotoForSlide1 from "../../assets/jpg/mainBackground.jpg";
import { useMediaQuery } from "@mui/material";

const MainSlider = () => {
  const isMinTablet = useMediaQuery("(max-width: 860px)");
  return (
    <div className={style.swiperBlock}>
      <Swiper
        navigation={!isMinTablet}
        modules={[Navigation]}
        className={style.swiper}
      >
        <SwiperSlide className={style.swiperItem}>
          <div className={style.background} />
          <div className={"container"}>
            <div className={style.content}>
              <h1>Ваш надежный партнер!</h1>
              <h3>
                Компания «AILINE LLC» - генератор полезных и уникальных
                IT-решений для среднего и крупного бизнеса, а также комьюнити
                высококлассных IT-специалистов готовых разгрузить вашу компанию
                посредством сотрудничества в формате аутсорсинга и аутстаффинга.
              </h3>
              <a href="#">Contact us</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperItem}>
          <div className={style.background} />
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
