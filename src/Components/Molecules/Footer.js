import "./Footer.css"
import { FaInstagram } from "react-icons/fa6";
import { PiTelegramLogoLight } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { GrMapLocation } from "react-icons/gr";

function Footer({ instagramUrl, twitterUrl, telegamUrl, address, phone }) {

    return (
        <div className="footer__container w-full h-auto text-2xl flex flex-col  items-center justify-center text-black mt-8 bg-my_bg_gray">
            <div className="footer w-4/5 flex flex-col justify-center items-center text-xl sm:flex-row-reverse">
                <div className="social__media w-1/2 sm:w-2/6 flex flex-row items-center justify-center my-2 sm:justify-end">
                    <a href="https://instagram.com"><FaInstagram size={30} /></a>
                    <a href="https://telegram.com"><PiTelegramLogoLight size={30} /></a>
                    <a href="https://x.com"><CiTwitter size={30} /></a>
                </div>
                <div className="contact__container flex flex-col justify-center items-center  sm:w-2/6 my-3">
                    <div className="adress_container flex flex-row my-2">
                        <div className="address__icon mr-2"><GrMapLocation size={30} /></div>
                        <div className="address__text"> {address}</div>
                    </div>
                    <div className="phone_container flex flex-row my-2"> 
                        <div className="phone__icon ml-2">  <CiPhone size={30} /></div>
                       
                        <div className="phone__text"> {phone}</div>
                    </div>
                </div>
                <div className="copyRight__container flex text-sm sm:justify-start sm:w-2/6 sm:mt-3 my-1"> © Copyright 2024 EmadNejati. All rights reserved</div>
            </div>
        </div>
    )
}

export default Footer