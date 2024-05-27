import React, { useContext, } from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaMapMarker, FaRegEnvelope, FaEnvelopeSquare } from 'react-icons/fa';
import { HiOutlineLocationMarker } from "react-icons/hi";
import meetingimg from '../assets/Meetingimg.webp';
import logo from '../assets/logo.png';
import profilepic '../assests/photo1.jpg';
import axios from 'axios';
import { UserContext } from '../ContextApi/UserContext';

const Card1 = () => {

  
const {UserData} = useContext(UserContext);
  const cardStyle = {
    backgroundColor: 'rgb(6,18,68)',
    color: '#fff',
    borderRadius: '15px',
    boxSizing: 'border-box',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    height: '600px',
    width: '440px',
    overflow: 'hidden',
    marginTop: '20px',
    boxShadow: '0 0.1em 0.8em -0.5em white',
  };

  const profileImageStyle = {
    width: '120px',
    // height: 'auto',
    // objectFit: 'cover',
    borderRadius: '50%',
  };
  

  const profileImageContainerStyle = {
    height: '130px',
    width: '120px',
    position: 'absolute',
    top: '50%',
    left: '20%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'lightgrey',
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    padding: '10px',
  };

  const nameStyle = {
    fontSize: '1.6rem',
    marginBottom: '0.5rem',
    marginRight:"70px"
  }

  const companyStyle = {
    fontSize: '15px',
    marginBottom: '0.5rem',
    marginRight:"100px"

  };

  const titleStyle = {
    fontSize: '15px',
    fontWeight:'bold',
    marginRight:"70px"

  };

  const icons ={
    // height:"50px"
    marginRight:'180px',
    marginTop:'15px',

     }

  const iconStyle = {
    fontSize: '30px',
    padding:'10px',
    backgroundColor: "rgb(253,128,49)",
    color: 'white',
    margin: '5px 5px 0 5px', 
    borderRadius:'50%'
  };

  const bannerImageStyle = {
    width: '105%',
    borderRadius: '15px 15px 0 0',
    objectFit: 'cover',
    marginleft: '10%'
  };

  const bannerContainerStyle = {
    borderRadius: '15px 15px 0 0',
    overflow: 'hidden',
    position: 'relative',
  };

  const logoImageContainer = {
    height: '80px',
    width: '80px',
    position: 'absolute',
    top: '10%',
    right: '10px',
    backgroundColor: '#fff',
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    padding: '5px',
  };


  const logoStyle = {
    padding: '10px',
    width: '60px',
    height: '60px',
  
  };

  const hrStyle1 = {
    backgroundColor: "rgb(253,128,49)",
    height: "3px",
    border: "none",
    transform: "rotate(18deg)",
    transformOrigin: "26% 30%",
    width: "500px", // Increased width
    position: 'absolute',
    top: '15px',
    left: '20px',
  };

  const hrStyle2 = {
    backgroundColor: "rgb(253,128,49)",
    height: "8px",
    border: "none",
    transform: "rotate(20deg)",
    transformOrigin: "26% 30%",
    width: "500px", // Increased width
    position: 'absolute',
    top: '68%',
    left: '250px',
  };

  const hrStyle3 = {
    backgroundColor: "rgb(253,128,49)",
    height: "8px",
    border: "none",
    transform: "rotate(20deg)",
    transformOrigin: "1% 3%",
    width: "500px", // Increased width
    position: 'absolute',
    top: '49%',
  };

  const hrStyle4 = {
    backgroundColor: "rgb(253,128,49)",
    height: "8px",
    border: "none",
    transform: "rotate(20deg)",
    transformOrigin: "26% 30%",
    width: "500px", // Increased width
    position: 'absolute',
    top: '77%',
    left: '280px',
  };

 


  return (
    <div style={cardStyle}>
      <div style={{ position: 'relative', height: '100%', width: '100%' }}>
        <div />
        <div style={bannerContainerStyle}>
          <hr style={hrStyle1} />
          <img src={meetingimg} alt="Banner" style={bannerImageStyle} />
          <div style={logoImageContainer}>
            <img src={logo} alt="Logo" style={logoStyle} />
          </div>
        </div>
        <hr style={hrStyle3} />
        <div style={profileImageContainerStyle}>
            <img src={userData.profilepic} alt="Profile" style={profileImageStyle} />
        </div>
        <div style={{marginRight:"200px", marginTop:"15px"}}>

            <div>
  <div key={user.id} style={nameStyle}>{userData.name}</div>
  <div style={companyStyle}>{userData.company}</div>
  <div style={titleStyle}>{userData.position}
  </div>
  </div>
        </div>
        <div style={icons}>
        <a href="tel:9505221870"><FaPhoneAlt style={iconStyle} /></a>
        <a href="mailto:arshadsyed074@gmail.com"><FaEnvelope style={iconStyle} /></a>
        <a href="https://wa.me/9505221870"><FaWhatsapp style={iconStyle} /></a>
        <a href="https://www.google.com/maps?q=Rayachoty"><HiOutlineLocationMarker style={iconStyle} /></a>
      </div>
        <hr style={hrStyle2} />
        <hr style={hrStyle4} />
      </div>

    </div>
  );
};

export default Card1;

