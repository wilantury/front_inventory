import React from 'react';
import { HeaderWrapper, Logo } from './styles'
import { MdTimeline, MdPermIdentity } from 'react-icons/md';

export const Header = () => {
    return (
        <HeaderWrapper>
                <Logo>
                    <MdTimeline size='45px' />
                    <p>Colegio Montecervino<br/>Materiales</p>
                </Logo>
                    
                <MdPermIdentity size='45px' />
        </HeaderWrapper>
    )
}