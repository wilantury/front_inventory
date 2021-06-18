import React from 'react'
import { Img, CardWrapper, AddListWrapper } from './styles'

export const CardMMaterial = (props) => {
    const { product } = props;
    console.log(product)
    return (
        <CardWrapper>
            <Img src="https://images.freeimages.com/images/large-previews/5fb/wool-1-1530392.jpg">
            {/* <Img src={product.image}> */}
            </Img>
            <h3>{product.name}</h3>
            <h4>Cantidad: {product.quantity} {product.unit_measure}</h4>
            <AddListWrapper>
                <input type="number" placeholder="1"></input>
                <button>Agregar</button>
            </AddListWrapper>
        </CardWrapper>   
    )
}