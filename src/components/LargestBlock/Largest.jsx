import React from "react";
import cl from "./Largest.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import Image from "next/image";
import q from "../../assets/swip1.jpg";
import w from "../../assets/swip2.jpg";
import e from "../../assets/swip3.jpg";
import r from "../../assets/swip4.jpg";
import { useMediaQuery } from "react-responsive";
import style from "../Services/Services.module.scss";
const Largest = () => {
  const isPlanshet = useMediaQuery({ query: "(max-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });
  return (
    <div className={cl.largest}>
      <div className={cl.largest_inner}>
        <h2>Our largest blog</h2>
        <div className={cl.header}>
          <h2>
            We Business and{" "}
            <span className={"greenContent"}>It Solutions Of Total</span>
            -Services
          </h2>
          <span className={cl.typography}>
            <p>
              Lorem ipsum is simply free text dolor sit amet, consectetur notted
              adipisicing elit sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua lonm andhn.
            </p>
          </span>
        </div>
        <div className={cl.largest_inner_bottom}>
          <Swiper
            resizeObserver={true}
            rewind={true}
            slidesPerView={(isPlanshet && 1) || (3 && isMobile && 2) || 3}
            spaceBetween={40}
            className={cl.mySwiper}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide className={cl.swipItem}>
              <Image src={q} className={cl.img} />
              <div className={cl.card_text_block}>
                <h3>
                  By Admin Softnet.<span>19 May 2021</span>
                </h3>
                <h2>Where people develop the own potential</h2>
                <p>
                  Our offices are located on the traditional, unced. photo booth
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={cl.swipItem}>
              <Image src={w} className={cl.img} />
              <div className={cl.card_text_block}>
                <h3>
                  By Admin Softnet.<span>19 May 2021</span>
                </h3>
                <h2>Where people develop the own potential</h2>
                <p>
                  Our offices are located on the traditional, unced. photo booth
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={cl.swipItem}>
              <Image src={e} className={cl.img} />

              <div className={cl.card_text_block}>
                <h3>
                  By Admin Softnet.<span>19 May 2021</span>
                </h3>
                <h2>Where people develop the own potential</h2>
                <p>
                  Our offices are located on the traditional, unced. photo booth
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={cl.swipItem}>
              <Image src={r} className={cl.img} />
              <div className={cl.card_text_block}>
                <h3>
                  By Admin Softnet.<span>19 May 2021</span>
                </h3>
                <h2>Where people develop the own potential</h2>
                <p>
                  Our offices are located on the traditional, unced. photo booth
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={cl.swipItem}>
              <Image src={q} className={cl.img} />
              <div className={cl.card_text_block}>
                <h3>
                  By Admin Softnet.<span>19 May 2021</span>
                </h3>
                <h2>Where people develop the own potential</h2>
                <p>
                  Our offices are located on the traditional, unced. photo booth
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={cl.swipItem}>
              <Image src={w} className={cl.img} />
              <div className={cl.card_text_block}>
                <h3>
                  By Admin Softnet.<span>19 May 2021</span>
                </h3>
                <h2>Where people develop the own potential</h2>
                <p>
                  Our offices are located on the traditional, unced. photo booth
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={cl.swipItem}>
              <Image src={e} className={cl.img} />

              <div className={cl.card_text_block}>
                <h3>
                  By Admin Softnet.<span>19 May 2021</span>
                </h3>
                <h2>Where people develop the own potential</h2>
                <p>
                  Our offices are located on the traditional, unced. photo booth
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={cl.swipItem}>
              <Image src={r} className={cl.img} />
              <div className={cl.card_text_block}>
                <h3>
                  By Admin Softnet.<span>19 May 2021</span>
                </h3>
                <h2>Where people develop the own potential</h2>
                <p>
                  Our offices are located on the traditional, unced. photo booth
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Largest;
