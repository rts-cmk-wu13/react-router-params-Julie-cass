import React from "react";
import { FiMapPin } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import vite from "../../public/vite.svg"; // Add this import

function InfomationBox() { // Capitalize the component name
    return (
        <>
        <button className="information_box">
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
        </button>
        </>
    );
}
export default InfomationBox;