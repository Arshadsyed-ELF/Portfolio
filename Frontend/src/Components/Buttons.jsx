    import React, { useContext } from 'react';
    import { FaPlus, FaQrcode, FaUpload } from 'react-icons/fa';
import { UserContext } from '../ContextApi/UserContext';

    const Buttons = () => {
       
    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '10px',
        position: 'fixed',
        bottom: '20px',
        cursor: 'pointer',
        zIndex: '999',
    };
    const leftButtonsStyle = {
        display: 'flex',
        gap: '16px',
    };

    const buttonStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff6f00', // Orange background
        color: 'white',
        border: 'none',
        cursor: 'pointer',
    };

    const iconStyle = {
        marginRight: '8px',
        fontSize: '24px',
    };

    const textStyle = {
        fontSize: '16px',
    };

    
      const container2 ={
        position: 'fixed',
        bottom: '20px',
        right: '15px',
        cursor: 'pointer',
        zIndex: '999',
        paddingRight: '10px',

      }
  
      
    return (
        <div >
        <div style={containerStyle}>
        <div style={leftButtonsStyle}>
            <button style={{ ...buttonStyle, width: '64px', height: '64px', borderRadius: '50%', fontSize: '24px' }}>
            <span style={{ fontSize: '24px' }}><FaQrcode/></span>
            </button>
            <button style={{ ...buttonStyle, width: '64px', height: '64px', borderRadius: '50%', fontSize: '24px' }}>
            <span style={{ fontSize: '24px' }}><FaUpload/></span>
            </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px',marginTop:"50px" }}>
        <a href="data:text/plain,9505221870" download="syedArshad.vcf"  style={container2}>

            <button style={{ backgroundColor: "rgb(253, 128, 49)", width: "150px", height: "64px", color: "white", border: "none", borderRadius: "25px", fontSize: "15px", position: 'relative', padding: '10px 20px',cursor:"pointer" }}>
            <span style={{ display: 'block', marginBottom: '0px',paddingRight:"45px"}}>Add to</span>
            <span style={{ display: 'block', marginBottom: '0px' ,paddingRight:"45px"}}>Contact</span>
            <span style={{ position: 'absolute', top: '13px', right: '10px', borderRadius: '50%', backgroundColor: "white", color: 'rgb(253, 128, 49)', fontSize: "25px", padding: '5px 8px 0 8px', lineHeight: '25px' }}>
                <FaPlus />
            </span>
            </button>
        </a>
        </div>
        </div>
        </div>
    );
    };

    export default Buttons;
