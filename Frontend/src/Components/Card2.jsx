import React, { useContext } from 'react'
import { UserContext } from '../ContextApi/UserContext'

const Card2 = () => {

  const { userData } = useContext(UserContext)

    const cardstyle ={
        backgroundColor: 'white',
        color: 'rgb(253,128,49)',
        borderRadius: '15px',
        boxSizing: 'border-box',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
        height: '280px',
        width: '450px',
        overflow: 'hidden',
        marginTop:'20px'
    }


  return (
    <div style={cardstyle}>
<div>
    <h2>About Me</h2>
    {userData.map(user => (
           <p style={{color:'grey',fontSize:'20px',paddingLeft:'15px',paddingRight:'15px'}}>
            {user.description}
          </p>
        ))}
</div>
    </div>
  )
}

export default Card2