import React, { useEffect, useState } from "react";
import { CiBellOn } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";


 import FooterMenu from "../components/dogpage/footerMenu.jsx";
import InfomationBox from "../components/dogpage/infomationBox.jsx";
import ScrollbarButtons from "../components/dogpage/scrollbarbtn.jsx";


import '../styling/Dogs.scss';
import vite from '../../public/vite.svg';
function doglist() {
 
    return(
        <>
            <div className="dogs">

                <div className="top_container">

                    <div className="pfp_box">
                        <img src={vite} alt="" />
                        <p><FaMapMarkerAlt className="icon" />noihnoh</p>
                    </div>
                    <button className="notifi_btn"><CiBellOn /></button>

                </div>
                
            <ScrollbarButtons />

                <div className="dog_scroll">
               <div><InfomationBox /></div>
                  <div><InfomationBox /></div>
                  <div><InfomationBox /></div>
               </div>

            </div>

            <footer>
                <FooterMenu />
            </footer>
        </>
    )
    
}

export default doglist;