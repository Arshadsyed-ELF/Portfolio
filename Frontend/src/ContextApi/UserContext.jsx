import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/userdata')
        .then((response)=>{
            setUserData(response.data); // Use response.data to set userData
        })
        .catch(()=>{
            console.log("error in fetching data")
        })
    }, []);

    return (
        <UserContext.Provider value={{ userData }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
