import React from "react";
import Image from "next/image";
import style from "./Team.module.scss";
import photoCarousel from "../../assets/jpg/carousel2.jpg";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import photoCarousel2 from "../../assets/jpg/main.jpg";
import photoCarousel3 from "../../assets/jpg/mainBackground.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import PersonIcon from "@mui/icons-material/Person";
import {Box, Typography, useMediaQuery} from "@mui/material";
import Modal from "@mui/material/Modal";

const styleForModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Team = () => {
  const isTablet = useMediaQuery("(max-width: 1200px)");
  const isMinTablet = useMediaQuery("(max-width: 860px)");
  const isPhone = useMediaQuery("(max-width: 480px)");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={style.wrapper}>
      <div className={style.backgroundBlock}>
        <div className={"container"}>
          <h3 className={style.title}>Our Team Members</h3>
          <div className={style.header}>
            <h2>
              We Business and{" "}
              <span className={"greenContent"}>It Solutions Of Total</span>
              -Services
            </h2>
            <span className={style.typography}>
              <p>
                Lorem ipsum is simply free text dolor sit amet, consectetur
                notted adipisicing elit sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua lonm andhn.
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className={style.sliderBlock}>
        <div className="container">
          <Swiper
            slidesPerView={(isMinTablet && 1) || (3 && isTablet && 2) || 3}
            spaceBetween={30}
            loop={true}
            navigation={!isPhone}
            modules={[Navigation]}
            className={style.mySwiper}
          >
            <SwiperSlide className={style.item} onClick={() => handleOpen()}>
              <div className={style.upper}>
                {/*<Image src={photoCarousel} />*/}
                <PersonIcon sx={{ fontSize: "300px", color: "#29c75d" }} />
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
                {/*<Image src={photoCarousel} />*/}
                <PersonIcon sx={{ fontSize: "300px", color: "#29c75d" }} />
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
                {/*<Image src={photoCarousel} />*/}
                <PersonIcon sx={{ fontSize: "300px", color: "#29c75d" }} />
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
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleForModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Team;
