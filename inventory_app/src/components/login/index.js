import React, {useState} from 'react';
import { FormWrapper } from './styles'

const API = "http://localhost:8000/api/v1/token/login"

async function loginUser(credentials) {
    return fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
      .catch(error => console.log(error))
}

export const Login = ( { setToken }) => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }

    
    return (
        <FormWrapper>
            <h1>LOGIN</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Username:</label><br/>
                    <input type="text" onChange={e => setUserName(e.target.value)} id="uname" placeholder="Username"></input><br/>
                    <label>Password:</label><br/>
                    <input type="password" onChange={e => setPassword(e.target.value)} id="password" placeholder="Password"/><br/><br/>
                    <input type="submit" value="Login" />
                </form>
            </div> 
        </FormWrapper>
    )
}