import React from "react";
import {Link} from "react-router-dom";
import '../styling/detail.scss';

function Detail() {
    return (
        <>
            <h1>Detail</h1>

            <footer>
                <div className="Back">
                    <button className="Back_btn"><Link className="Back_link" to="/dogs">Back</Link></button>
                </div>
            </footer>
        </>
    )
}
export default Detail;

/* <div className="Skip">
   <button className="Skip_btn"><Link className="Skip_link" to="/dogs">Skip</Link></button>
   </div> */