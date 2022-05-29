import React from "react";
import Image from "next/image";
import cl from "./Form.module.scss";
import icon from "../../assets/contact-icon.png";
import style from "../Services/Services.module.scss";
const Form = () => {
  return (
    <div className={cl.form}>
      <div className={cl.largest_inner}>
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
        <div className={cl.inp_blocks}>
          <input type="text" placeholder="Name*" />
          <input type="text" placeholder="Email*" />
        </div>
        <div className={cl.inp_blocks}>
          <input type="text" placeholder="Phone*" />
          <input type="text" placeholder="Website" />
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Comments/Message"
        ></textarea>
        <button>Submit Now</button>
      </div>
      <div className={cl.contact}>
        <div className={cl.contact_now}>
          <div className={cl.contact_now_inner}>
            <div className={cl.contact_now_inner_left}>
              <Image src={icon} />
              <h3>Start Your Best it-Service for Business</h3>
            </div>
            <div className={cl.contact_now_inner_right}>
              <button>Contact Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
