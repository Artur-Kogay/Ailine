import React from "react";
import Image from "next/image";
import style from "./WorkingProccess.module.scss";
import Work1 from "../../assets/png/work-1.png";
import Work2 from "../../assets/png/work-2.png";
import Work3 from "../../assets/png/work-3.png";
const WorkingProccess = () => {
  return (
    <div className={style.wrapper}>
      <div className="container">
        <h3 className={style.title}>Процесс работы</h3>
        <div className={style.header}>
          <h2>
            Мы <span className="greenContent">меняем подход работы</span>{" "}
            каждому проекту
          </h2>
          <span className={style.typography}>
            <p>
              Lorem ipsum is simply free text dolor sit amet, consectetur notted
              adipisicing elit sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua lonm andhn.
            </p>
          </span>
        </div>
        <div className={style.items}>
          <div className={style.item}>
            <div className={style.greenBackground}></div>
            <div className={style.imgBlock}>
              <Image src={Work1} />
              <div className={style.number}>1</div>
            </div>
            <div className={style.contentBlock}>
              <p>Качественный и понятный код</p>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.imgBlock}>
              <Image src={Work2} />
              <div className={style.number}>2</div>
            </div>
            <div className={style.contentBlock}>
              <p>
                Постоянный профессиональный рост каждого нашего разработчика
              </p>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.imgBlock}>
              <Image src={Work3} />
              <div className={style.number}>3</div>
            </div>
            <div className={style.contentBlock}>
              <p>Отлаженные бизнес-процессы</p>
            </div>
          </div>
        </div>
        <div className={style.btn}>
          <a>View all services</a>
        </div>
      </div>
    </div>
  );
};

export default WorkingProccess;
