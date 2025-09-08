import React,  { useEffect, useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function InfomationBox() {

 const [DOGS, setDOGS] = useState(null);
const [loading, setLoading] = useState(true);
const API_URL = "http://localhost:4000/dogs";


useEffect(() => {
 fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      console.log("Data fetched:", data);
      setDOGS(data);
      setLoading(false);
    })
    .catch(error => {
      console.error("Fetch error:", error);
      setLoading(false);
    });
},
[]);
console.log(DOGS)



 if(loading){
     return <p>Loading...</p>;
     }

 return(
     <>
     {DOGS.map(d =>(
        <div className="information_box" key={d.id}>
            <NavLink className="dog_link" to={`/detail/${d.id}`} key={d.id}>
            <div className="dog_info_box" >
                <div className="dog_image"><img src={d.image} alt="" /></div>
               {/* <button className="favor_btn"><FaHeart className="icon" /></button> */}
                <div className="dog_info">
                    <span className="species_info">
                        <h3>{d.breed}</h3>
                        <p><FiMapPin className="icon map_icon" />{d.location}</p>
                    </span>
                    <p>Taking care of a pet is my favorite, it helps me to...</p>
                </div>
            </div>
            </NavLink>
        </div>
    ))}
    </>
)
}

export default InfomationBox;
      