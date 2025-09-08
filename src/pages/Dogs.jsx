import React, { useEffect, useState } from "react";


 import FooterMenu from "../components/dogpage/footerMenu.jsx";
import InfomationBox from "../components/dogpage/infomationBox.jsx";
import ScrollbarButtons from "../components/dogpage/scrollbarbtn.jsx";
import User from "../components/userINFO/user.jsx";

import '../styling/Dogs.scss';
import vite from '../../public/vite.svg';

function Dogs() {

    return(
        <>
       <div className="dog">
           <div className="top_container">
               <User />
           </div>
           <ScrollbarButtons />
           <div className="dog_scroll">
              <InfomationBox />
                <InfomationBox />
           </div>
           <footer>
               <FooterMenu />
           </footer>
       </div>
     
        </>
    )
    
}

export default Dogs;



/*         <button className="information_box">
            <NavLink to={"/detail{id}"}></NavLink>
        <div className="dog_info_box" >
            <div className="dog_image"><img src={vite} alt="" /></div>
            <button className="favor_btn"><FaHeart className="icon" /></button>
            <div className="dog_info">
                <span className="species_info">
                    <h3>species</h3>
                    <p><FiMapPin className="icon map_icon" /></p>
                </span>
                <p>Taking care of a pet is my favorite, it helps me to...</p>
            </div>
        </div>
        </button> */