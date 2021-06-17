import React from 'react';
import { FormWrapper } from './styles'

export const Login = () => {
    return (
        <FormWrapper>
            <h1>LOGIN</h1>
            <div>
                <form>
                    <label>Username:</label><br/>
                    <input type="text" id="uname" placeholder="Username"></input><br/>
                    <label>Password:</label><br/>
                    <input type="password" id="password" placeholder="Password"/><br/><br/>
                    <input type="submit" value="Login" />
                </form>
            </div> 
        </FormWrapper>
    )
}