import React from "react";
import animal from '../../assets/Animal.svg'
import { Link } from "react-router-dom";
import '../styling/Home.scss';

function Home() {
    return(
        <>
        <div className="Home">
     <img className="animal-image" src={animal} alt="A cute animal" />
     <h3 className="titleHome">my pets</h3>

     <div className="pet-app-desc">
     <p>Taking care of a pet is my favorite, it helps me</p>
     <p>to gaimr stress and fatigue.</p>
     </div>

<div className="Skip">
   <button className="Skip_btn"><Link className="Skip_link" to="/dogs">Skip</Link></button>
   </div>
     </div>
        </>
    )
}
export default Home;