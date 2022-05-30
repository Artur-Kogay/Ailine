import React from "react";
import Image from "next/image";
import style from "./About.module.scss";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AboutImg from "../../assets/jpg/aboutBlockImg.jpg";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Founder from "../../assets/jpg/about-admin.jpg";
import Signature from "../../assets/png/signature.png";

const About = () => {
  return (
    <div className={style.aboutWrapper}>
      <div className="container">
        <div className={style.blocks}>
          <div className={style.block}>
            <div className={style.blockHeader}>
              <AccountBoxIcon sx={{ fontSize: 70 }} />
              <h4>Punctual Of Delivery</h4>
            </div>
            <p>
              While building out a new website you literally no idea of where to
              start.
            </p>
          </div>
          <div className={`${style.block} ${style.blockCenter}`}>
            <div className={style.blockHeader}>
              <AccountBoxIcon sx={{ fontSize: 70 }} />
              <h4>Punctual Of Delivery</h4>
            </div>
            <p>
              While building out a new website you literally no idea of where to
              start.
            </p>
          </div>
          <div className={style.block}>
            <div className={style.blockHeader}>
              <AccountBoxIcon sx={{ fontSize: 70 }} />
              <h4>Punctual Of Delivery</h4>
            </div>
            <p>
              While building out a new website you literally no idea of where to
              start.
            </p>
          </div>
        </div>
        <div className={style.aboutBlock}>
          <div className={style.leftBlock}>
            <div className={style.greenBlock} />
            <Image src={AboutImg} />
          </div>
          <div className={style.rightBlock}>
            <h3>О нас</h3>
            <h2>
              Мы развиваемся каждый день, совершенствуем каждого нашего
              специалиста, совершенствуем качество нашего кода.
            </h2>
            <p>
              Мы стремимся всегда быть надежным партнером, совершенствовать
              качество наших услуг 24/7, и привносить на рынок инновационные
              IT-решения, повышающие эффективность деятельности наших партнеров.
            </p>

            <div className={style.blockAbouts}>
              <div className={style.blockAbout}>
                <PowerSettingsNewIcon sx={{ color: "#29c75d", fontSize: 70 }} />
                <div>
                  <h4>О проектах</h4>
                  <p>Качественный и понятный код...</p>
                </div>
              </div>
              <div className={style.blockAbout}>
                <PowerSettingsNewIcon sx={{ color: "#29c75d", fontSize: 70 }} />
                <div>
                  <h4>О сотрудниках</h4>
                  <p>
                    Постоянный профессиональный рост каждого нашего разработчика
                  </p>
                </div>
              </div>
            </div>
            <div className={style.hr} />
            <div className={style.founder}>
              <div className={style.imgBlock}>
                <Image src={Founder} />
                <span>
                  <h4>Marc Antoine Brane</h4>
                  <p>Co-Founder</p>
                </span>
              </div>
              <div className={style.signature}>
                <Image src={Signature} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
