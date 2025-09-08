import React, {useEffect, useState} from "react";
import vite from '../../../public/vite.svg';
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";


function User() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/user`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
        .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  }, []); // Add [] so it only runs once

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <>
    <div className="pfp_box">
      <img className="pfp_image" src={user.image} alt="pfp picture" />
      <p><FaMapMarkerAlt className="icon" />{user.location}</p>
      <button className="notifi_btn"><CiBellOn className="bell_icon" /></button>
    </div>
      </>
  );
}

export default User;