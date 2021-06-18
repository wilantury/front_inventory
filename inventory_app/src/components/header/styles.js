import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Logo = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    & p {
        margin-left: 10px;
        color: lightgrey;
    }
`
export const Label = styled.label`
    font-size: 25px;
    border: 2px solid;
    border-radius: 5px;
    padding: 1px 15px;
    color: rgb(34,193,195);
    &:hover{
        color: white;
        cursor: pointer;
    }
`