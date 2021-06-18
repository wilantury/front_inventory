import React from 'react';
import { HeaderWrapper, Logo, Label } from './styles'
import { MdTimeline, MdPermIdentity } from 'react-icons/md';

const API = "http://localhost:8000/api/v1/token/logout"


async function userLogout (token) {
    
    return fetch(API, {
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        }
    })
    .then( response  => response.json())
    .catch( error => console.log(error))
}

export const Header = ( {token, setToken} ) => {
    
    const handleLogout = async (e) => {
        const response = await userLogout(token);
        console.log(response)
        sessionStorage.clear()
        setToken('')
    }

    return (
        <HeaderWrapper>
                <Logo>
                    <MdTimeline size='45px' />
                    <p>Colegio Montecervino<br/>Materiales</p>
                </Logo>
                {!token 
                    ? 
                    <MdPermIdentity size='45px'/>
                    :
                    <Label onClick={handleLogout}>   
                        Logout
                    </Label> 
                }                
        </HeaderWrapper>
    )
}