import React from 'react';
import cl from './Ompanies.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Autoplay } from 'swiper'
import Image from 'next/image';
import q from '../../assets/swip1.jpg';
import w from '../../assets/swip2.jpg';
import e from '../../assets/swip3.jpg';
import r from '../../assets/swip4.jpg';
import { useMediaQuery } from 'react-responsive';

const Ompanies = () => {
    const laptop = useMediaQuery({ query: '(max-width: 1024px)' });
    const isPlanshet = useMediaQuery({ query: '(max-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
    return (
        <div className={cl.largest}>
            <div className={cl.largest_inner}>
                <h2>Our Best projects</h2>
                <div className={cl.largest_inner_top}>
                    <div className={cl.largest_inner_top_left}>
                        <h1>The Most Successful <span> Projects Ompanies In </span>Region.</h1>
                    </div>
                    <div className={cl.largest_inner_top_right}>
                        <p>Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lonm andhn.</p>
                    </div>
                </div>
                <div className={cl.largest_inner_bottom}>
                    <Swiper
                        resizeObserver={true}
                        rewind={true}
                        slidesPerView={laptop ? 2 : isPlanshet ? 2 : isMobile ? 1 : 4}
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
                                <h3>Business and Marketing</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={cl.swipItem}>
                            <Image src={w} className={cl.img} />
                            <div className={cl.card_text_block}>
                                <h3>Product of Design</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={cl.swipItem}>
                            <Image src={e} className={cl.img} />

                            <div className={cl.card_text_block}>
                                <h3>Business and Expand</h3>

                            </div></SwiperSlide>
                        <SwiperSlide className={cl.swipItem}>
                            <Image src={r} className={cl.img} />
                            <div className={cl.card_text_block}>
                                <h3>Marketind for Grown</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={cl.swipItem}>
                            <Image src={q} className={cl.img} />
                            <div className={cl.card_text_block}>
                                <h3>Improve for Business</h3>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <button>
                        View all Projects
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Ompanies;