import React from 'react'
import './CSS/UserIcon.css'

import {FaDesktop, FaDatabase, FaAddressCard, FaUsers} from 'react-icons/fa';
import {MdPersonAdd, MdDelete} from "react-icons/md";
import {AiOutlineUnorderedList, AiFillCreditCard, AiFillLike} from "react-icons/ai";


function UserIcons() {
    return (
        <>
            <div className="float-left usericons">
                <p><FaDesktop/></p>
                <p><MdPersonAdd/></p>
                <p><AiOutlineUnorderedList/></p>
            </div>
            <div className="float-left usericons">
                <p><AiFillCreditCard/></p>
                <p><FaDatabase/></p>
                <p><AiFillLike/></p>
            </div>
            <div className="float-left usericons">
                <p><FaAddressCard/></p>
                <p><FaUsers/></p>
                <p><MdDelete/></p>
            </div>
        </>
    )
}

export default UserIcons
