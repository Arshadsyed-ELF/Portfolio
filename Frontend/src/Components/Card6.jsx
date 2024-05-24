import React from 'react';
import { FaLink } from 'react-icons/fa';

const Card6 = () => {
  const cardstyle = {
    backgroundColor: 'white',
    color: 'rgb(253,128,49)',
    borderRadius: '15px',
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    height: '210px',
    width: '450px',
    overflow: 'hidden',
    marginTop: '20px',
    fontSize: '25px',
    paddingLeft: '20px',
    paddingRight: '20px'
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'rgb(253,128,49)',
    paddingTop:'15px'
  };

  const textStyle = {
    fontSize: '19px',
    paddingLeft: '17px'
  };

  const arrowStyle = {
    fontSize: '24px',
    paddingLeft: '170px'
  };

  const iconstyle = {
    borderRadius: '50%',
    width: '30px',
    height: '50px',
    color:'black'
    
  };

  return (
    <div style={cardstyle}>
      <p style={{ textAlign: "center", fontSize: '30px', marginBottom: '5px' }}>Links</p>
      <p style={{ textAlign: "center", color: 'grey', fontSize: "22px", borderBottom: '1px dotted black', margin: 0, paddingBottom: '20px' }}>Find Us Here</p>

      <a href="https://www.thesmartbridge.com/" style={linkStyle}>
        <FaLink  style={iconstyle}  />
        <p style={textStyle}>CompanyWebsite</p>
        <svg
          style={arrowStyle}
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-arrow-right"
        >
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    </div>
  );
};

export default Card6;
