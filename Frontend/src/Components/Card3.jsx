import React, { useContext } from 'react'
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { CiLocationArrow1 } from "react-icons/ci";
import { TiLocationArrow } from "react-icons/ti";
import { UserContext } from '../ContextApi/UserContext';

const Card3 = () => {


  const { userData } = useContext(UserContext)

  const cardstyle = {
    backgroundColor: 'white',
    color: 'rgb(253,128,49)',
    borderRadius: '15px',
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    height: '350px',
    width: '450px',
    overflow: 'hidden',
    marginTop: '20px',
    fontSize: '22px',
    paddingLeft: '20px'
  }
  const iconStyle = {
    fontSize: '25px',
    padding: '10px',
    backgroundColor: "black",
    color: 'white',
    margin: '10px 6px 0 5px',
    borderRadius: '50%'
  };

  const iconStyle2 = {
    fontSize: "25px",
    marginRight: "5px",
  };
  const buttonStyle = {
    backgroundColor: "rgb(253, 128, 49)",
    border: "none",
    height: "35px",
    borderRadius: "25px",
    color: "white",
    fontSize: "17px",
    width: "130px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
  };


  return (
    <div style={cardstyle}>
      <div style={{ display: "flex", borderBottom: '1px dotted black' }}>
        <a href="tel:9505221870"><FaPhoneAlt style={iconStyle} /></a>
        <p>Contact Us</p>
      </div>
      <div style={{ marginTop: "20px" }}>
        <span >Call Us</span>
        {userData.map(user => (
          <p style={{ color: 'grey', fontSize: '15px', marginTop: '0' }}>
            {user.phno}
          </p>
        ))}

      </div>
      <div>
        <span>Email</span>
        {userData.map(user => (
          <p style={{ color: 'grey', fontSize: '15px', marginTop: '0' }}>{user.email}</p>
        ))}

      </div>
      <div>
        <span>Address</span>
        {userData.map(user => (
          <p style={{ color: 'grey', fontSize: '15px', marginTop: '0' }}>{user.address}</p>
        ))}
        {/* <p style={{ color: 'grey', fontSize: '15px', marginTop: '0' }}>Office No. 8, 2nd Floor, Akshay Center
          near McDonalds, Belthika Nagar, Thergaon
          Pune, Pimpri-Chinchwad, Maharashtra, 411033
          India</p> */}
        <div>
          <a href="https://www.google.com/maps?q=Rayachoty" style={{ textDecoration: "none" }}>
            <button style={buttonStyle}>
              <TiLocationArrow style={iconStyle2} />
              Directions
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card3