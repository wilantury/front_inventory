import styled from 'styled-components'

export const FormWrapper = styled.div`
    width: 100%;
    height:80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & h1{
        margin-bottom: 20px;
        color: white;
    }
    & div {
        width: 250px;
        border-radius: 10px;
        padding: 20px;
        font-family:Arial, "Helvetica", sans-serif;
        box-shadow: 0px 1px 24px 5px rgba(0,0,0,0.46);
        -webkit-box-shadow: 0px 1px 24px 5px rgba(0,0,0,0.46);
        -moz-box-shadow: 0px 1px 24px 5px rgba(0,0,0,0.46);
        & form {
            display: flex;
            flex-direction: column;
            width: 100%;
            & input {
                height 35px;
                background-color: transparent;
                border: none;
                border-bottom: solid 1px;
                outline: 0;
                font-size:16px;
            }
            & input[type="submit"] {
                /* width:240px; */
                height:35px;
                display:block;
                font-family:Arial, "Helvetica", sans-serif;
                font-size:16px;
                font-weight:bold;
                color:#fff;
                text-decoration:none;
                text-transform:uppercase;
                text-align:center;
                text-shadow:1px 1px 0px #37a69b;
                padding-top:6px;
                /* margin: 29px 0 0 29px; */
                position:relative;
                cursor:pointer;
                border: none;  
                background-color: #37a69b;
                background-image: linear-gradient(top,#3db0a6,#3111);
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
                border-bottom-left-radius:5px;
                box-shadow: inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #497a78, 0px 10px 5px #999;
            }
            & input[type="submit"]:active {
                top:3px;
                box-shadow: inset 0px 1px 0px #2ab7ec, 0px 2px 0px 0px #31524d, 0px 5px 3px #999;
            }
        }
    }
`