import React from "react";
import animal from '../../assets/Animal.svg'
import { NavLink } from "react-router-dom";
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
<footer>
<div className="Skip">
   <button className="Skip_btn"><NavLink className="Skip_link" to="/dogs">Skip</NavLink></button>
   </div>

</footer>
     </div>
        </>
    )
}
export default Home;