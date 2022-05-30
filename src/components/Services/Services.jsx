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
        <h3>Наш Сервис</h3>
        <div className={style.header}>
          <h2>
            Какиее услуги <span className={"greenContent"}>мы предлагаем</span>?
          </h2>
          <span className={style.typography}>
            <p>Data science + Data mining + Open-Data.</p>
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
                <h3>IT партнерство.</h3>
                <p>Аутсорсинг наших IT-специалистов под разные задачи.</p>
                <p>Аутстаффинг наших IT-специалистов под разные задачи</p>
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
                <h3>Разработка Веб и мобильных приложений.</h3>
                <p>Мобильные приложения (iOS, Android).</p>
                <p>Крупные интернет-порталы, а также платформы.</p>
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
                <h3>Разработка корпоративного программного обеспечения.</h3>
                <p>CRM системы.</p>
                <p>ERP системы</p>
                <p>
                  Любой другой IT-продукт, разработанный с учетом всех ваших
                  пожеланий.
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
