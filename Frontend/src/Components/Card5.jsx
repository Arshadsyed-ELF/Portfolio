import React from 'react';

const Card5 = () => {
  const cardstyle = {
    backgroundColor: 'white',
    color: 'rgb(253,128,49)',
    borderRadius: '15px',
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    height: '100px',
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
    paddingTop:'18px'
  };

  const textStyle = {
    fontSize: '21px',
    paddingLeft: '17px'
  };

  const arrowStyle = {
    fontSize: '24px',
    paddingLeft: '200px'
  };

  const imgStyle = {
    borderRadius: '50%',
    width: '60px',
    height: '60px'
  };

  return (
    <div style={cardstyle}>
      <a href="https://www.instagram.com/abul.arshad/" style={linkStyle}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
          alt="Instagram" 
          style={imgStyle}
        />
        <p style={textStyle}>Instagram</p>
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

export default Card5;
