import React from "react";
import { NavLink } from "react-router-dom";

import { IoPawOutline } from "react-icons/io5";
import { BsGenderAmbiguous } from "react-icons/bs";

function DetailFoot() {
    return (
        <>
        <article className="Back">
            <div className="content_box">


                <div className="name_place_box">
                    <h1>name</h1>
                    <p>place</p>
                </div>


                <section className="about_dog_box">
                    <div className="species_name">
                        <div className="paw_icon"><IoPawOutline /></div>
                        <p>species</p>
                    </div>
                    <div className="gender">
                        <div className="gender_icon"><BsGenderAmbiguous /></div>
                        <p>gender</p>
                    </div>
                </section>

                <div className="detail_txt">
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quae adipisci iure
                        soluta ut molestias corporis, sed nostrum
                        assumenda veritatis</p>
                </div>
                <button className="Back_btn"><NavLink className="Back_link" to="/dogs">Back</NavLink></button>
            </div>
        </article>
        </>
    );
}

export default DetailFoot;
