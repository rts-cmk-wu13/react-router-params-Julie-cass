import React from "react";
import { NavLink } from "react-router-dom";

import { CiHome } from "react-icons/ci";
import { IoChatbubbleOutline, IoPersonOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

function FooterMenu() {
    return (
        <>
            <nav className="footer">
                <ul className="footer_menu">
                    <li className="footer_item"><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/dogs"><CiHome /></NavLink></li>

                    <li className="footer_item"><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/detail/1"><IoChatbubbleOutline /></NavLink></li>

                    <li className="footer_item"><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/"><IoPersonOutline /></NavLink></li>

                    <li className="footer_item"><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/"><FaHeart /></NavLink></li>
                </ul>
            </nav>
        </>
    );
}
export default FooterMenu;

/* className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  } */