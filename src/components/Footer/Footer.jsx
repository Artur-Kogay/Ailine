import Image from 'next/image';
import React from 'react';
import cl from './Footer.module.scss';
import location from '../../assets/icons/001-location.png';
import call from '../../assets/icons/003-phone-call.png';
import web from '../../assets/icons/002-world-wide-web.png';
import first from '../../assets/1.jpg';
import second from '../../assets/2.jpg';
import third from '../../assets/3.jpg';
import fourth from '../../assets/4.jpg';
import fifth from '../../assets/5.jpg';
import sixth from '../../assets/6.jpg';

const image = [first, second, third, fourth, fifth, sixth];

const Footer = () => {
    return (
        <div className={cl.footer}>
            <div className={cl.footer_inner}>
                <div className={cl.first}>
                    <h2>AILINE</h2>
                    <p>Nemo enim ipsam voluptate quia voluptas sit aspernatur aut odit aut fugit, sed quia magni this dolores eos qui ratione .</p>
                </div>
                <div className={cl.second}>
                    <h2>Quick Links</h2>
                    <p>– Customers Services</p>
                    <p>– T Department</p>
                    <p>– About Our Company</p>
                    <p>– Business Growth</p>
                    <p>– Make An Appointment</p>
                </div>
                <div className={cl.third}>
                    <h2>Our Contacts</h2>
                    <div className={cl.third_blocks}>
                        <div className={cl.third_blocks_img_block} style={{ width: "40px" }}>
                            <Image src={location} />
                        </div>
                        <p>Address: <a href="https://www.google.com/maps/@42.8631099,74.5776766,12z">
                           Kyrgyzstan, Bishkek city </a></p>
                    </div>
                    <div className={cl.third_blocks}>
                        <div className={cl.third_blocks_img_block}>
                            <Image src={call} />
                        </div>
                        <p>Phone: <a href="tel:+996 (555) 999 953">+996 (555) 999 953</a>
                            <br />
                            Fax: +996 (555) 999 953 </p>
                    </div>
                    <div className={cl.third_blocks}>
                        <div className={cl.third_blocks_img_block}>
                            <Image src={web} />
                        </div>
                        <p>Email: <a href="mailto: ailinecompany.kg@gmail.com"> ailinecompany.kg@gmail.com</a>
                            <br />
                            Website: yourwebsite.com</p>
                    </div>
                </div>
                <div className={cl.fourth}>
                    <h2>Our Gallery</h2>
                    <div className={cl.fourth_inner}>
                        {image.map((item, index) => (
                            <div key={index}>
                                <Image src={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;