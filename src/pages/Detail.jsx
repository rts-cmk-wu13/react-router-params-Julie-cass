import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";

import { IoPawOutline } from "react-icons/io5";
import { BsGenderAmbiguous } from "react-icons/bs";


import '../styling/detail.scss';

function Detail() {
 const [info, setInfo] = useState();
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
      setInfo(data);
      setLoading(false);
    })
    .catch(error => {
      console.error("Fetch error:", error);
      setLoading(false);
    });
},
[]);
console.log(info)



 if(loading){
     return <p>Loading...</p>;
     }

 return(
     <>
     {info.map(info =>(

            <div className="detail" key={info.id}>
                <div className="image_box">
                    <img src={"http://localhost:4000/filebucket/dog" + info.id + ".png"} alt="place holder image" />
                </div>

                <section>
                    <article className="Back">
                        <div className="content_box">


                            <div className="name_place_box">
                                <h1>{info.breed}</h1>
                                <p>{info.location}</p>
                            </div>


                            <section className="about_dog_box">
                                <div className="species_name">
                                    <div className="paw_icon"><IoPawOutline /></div>
                                    <p>{info.breed}</p>
                                </div>
                                <div className="gender">
                                    <div className="gender_icon"><BsGenderAmbiguous /></div>
                                    <p>{info.gender}</p>
                                </div>
                            </section>

                            <div className="detail_txt">
                                <p>{info.long_description}</p>
                            </div>
                            <button className="Back_btn"><NavLink className="Back_link" to="/dogs">Back</NavLink></button>
                        </div>
                    </article>
                </section>
            </div>
     ))}

        </>
    )
};
export default Detail;

