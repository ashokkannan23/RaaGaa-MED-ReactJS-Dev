import React from 'react';
import './CSS/Togglenavbar.css';
import {FaUsers} from 'react-icons/fa';

function toggleNavBar() {

    function openNav() {
        var x = document.getElementById("mySidebar").offsetWidth;

        if (x === 50) {
            document.getElementById("mySidebar").style.width = "250px";
        } else {
            document.getElementById("mySidebar").style.width = "50px";
        }
    }

    return (
        <div id="mySidebar" className="sidebar">
            <p className="openbtn" onClick={() => openNav()}><FaUsers /></p>

        </div>

    )
}

export default toggleNavBar
