import React from 'react';

const Card4 = () => {
  const cardstyle = {
    backgroundColor: 'white',
    color: 'rgb(253,128,49)',
    borderRadius: '15px',
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    height: '180px',
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
    color: 'rgb(253,128,49)'
  };

  const textStyle = {
    fontSize: '21px',
    paddingLeft: '17px'
  };

  const arrowStyle = {
    fontSize: '24px',
    paddingLeft: '220px'

  };

  const imgStyle = {
    borderRadius: '50%',
    width: '60px',
    height: '60px'
  };

  return (
    <div style={cardstyle}>
      <p style={{ textAlign: "center", borderBottom: '1px dotted black', paddingBottom: '20px' }}>Find Me Here</p>
      <a href="https://www.linkedin.com/in/syed-arshad-782a08226" style={linkStyle}>
        <img
          src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
          alt="LinkedIn"
          style={imgStyle}
        />
        <p style={textStyle}>LinkedIn</p>
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

export default Card4;
