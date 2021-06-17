import React from 'react'
import { Img, CardWrapper, AddListWrapper } from './styles'

export const CardMMaterial = () => {
    
    return (
        <CardWrapper>
            <Img src="https://images.freeimages.com/images/large-previews/5fb/wool-1-1530392.jpg">
            </Img>
            <h3>Lana virgen</h3>
            <h4>Cantidad: 20 rollos</h4>
            <AddListWrapper>
                <input type="number" placeholder="1"></input>
                <button>Agregar</button>
            </AddListWrapper>
        </CardWrapper>   
    )
}