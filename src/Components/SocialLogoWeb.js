import React from 'react';
import './CSS/SocialLogoWeb.css';
import RaaGaaMedLogo from './images/logo.png';
import {FiPhoneCall} from "react-icons/fi";
import {FaWhatsappSquare} from 'react-icons/fa';
import {MdMail} from "react-icons/md";

function SocialLogoWeb() {
    function openWebiste() {
        window.open('http://www.raagaamed.com/', '_blank');
    }
    return (<> <div className="icon-col">
        <a href="#contact"><FiPhoneCall/></a>
        <a href="#home"><FaWhatsappSquare/></a>
        <a href="#news"><MdMail/></a>
    </div> < div className = "logo" > <img style={{cursor: 'pointer', width:'200px'}} onClick= {() => openWebiste()} src={RaaGaaMedLogo} alt="RaaGaa+Med logo"/> < p onClick = {
        () => openWebiste()
    } > www.raagaamed.com < /p>
     </div > </>)
}

export default SocialLogoWeb
