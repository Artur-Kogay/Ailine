import React from "react";
import Image from "next/image";
import style from "./Services.module.scss";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import photoCarousel from "../../assets/jpg/carousel2.jpg";
import photoCarousel2 from "../../assets/jpg/main.jpg";
import photoCarousel3 from "../../assets/jpg/mainBackground.jpg";
import { useMediaQuery } from "@mui/material";

const Services = () => {
  const isTablet = useMediaQuery("(max-width: 1200px)");
  const isMinTablet = useMediaQuery("(max-width: 860px)");
  const isPhone = useMediaQuery("(max-width: 480px)");

  return (
    <div className={style.wrapper}>
      <div className="container">
        <h3>Our Best Services</h3>
        <div className={style.header}>
          <h2>
            We Business and{" "}
            <span className={"greenContent"}>It Solutions Of Total</span>
            -Services
          </h2>
          <span className={style.typography}>
            <p>
              Lorem ipsum is simply free text dolor sit amet, consectetur notted
              adipisicing elit sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua lonm andhn.
            </p>
          </span>
        </div>

        <div className={style.slider}>
          <Swiper
            slidesPerView={(isMinTablet && 1) || (3 && isTablet && 2) || 3}
            spaceBetween={30}
            loop={true}
            navigation={!isPhone}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className={style.item}>
              <div className={style.upper}>
                <Image src={photoCarousel} />
              </div>
              <div className={style.lower}>
                <div className={style.circle}>
                  <PowerSettingsNewIcon sx={{ fontSize: 50 }} />
                </div>
                <h3>Lorem ipsum.</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequuntur, optio.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={style.item}>
              <div className={style.upper}>
                <Image src={photoCarousel2} />
              </div>
              <div className={style.lower}>
                <div className={style.circle}>
                  <PowerSettingsNewIcon sx={{ fontSize: 50 }} />
                </div>
                <h3>Lorem ipsum.</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequuntur, optio.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={style.item}>
              <div className={style.upper}>
                <Image src={photoCarousel3} />
              </div>
              <div className={style.lower}>
                <div className={style.circle}>
                  <PowerSettingsNewIcon sx={{ fontSize: 50 }} />
                </div>
                <h3>Lorem ipsum.</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequuntur, optio.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={style.btn}>
          <a>View all services</a>
        </div>
      </div>
    </div>
  );
};

export default Services;
