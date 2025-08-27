import React from "react";
import { CiBellOn } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";


import FooterMenu from "../components/footerMenu";
import InfomationBox from "../components/infomationBox.jsx";
import ScrollbarButtons from "../components/scrollbarbtn.jsx";

import '../styling/Dogs.scss';
import vite from '../../public/vite.svg';
function Dogs() {
    return (
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

            </div>{/* end of dogs */}

            <footer>
                <FooterMenu />
            </footer>
        </>
    )
}

export default Dogs;