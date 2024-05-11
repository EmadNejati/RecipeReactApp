import "./Footer.css"
import { FaInstagram } from "react-icons/fa6";
import { PiTelegramLogoLight } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";

function Footer({ instagramUrl, twitterUrl, telegamUrl ,address , phone}) {

    return (
        <div className="footer__container">
            <div className="social__media">
                <a href="https://instagram.com"><FaInstagram /></a>
                <a href="https://telegram.com"><PiTelegramLogoLight /></a>
                <a href="https://x.com"><CiTwitter /></a>
            </div>
            <div className="contact__container">
                <div className="adress_container">{address}</div>
                <div className="phone_container">{phone}</div>
            </div>
            <div className="copyRight__container"> © Copyright 2024 EmadNejati. All rights reserved</div>
        </div>
    )
}

export default Footer