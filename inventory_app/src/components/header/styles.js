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