import React, { useEffect, useState } from 'react'
import { CardMMaterial } from '../../components/cardMaterial'
import { ListContainer } from './styles'

import useToken from '../../hooks/useToken'

const API = "http://localhost:8000/api/v1/products/"


export const ProductsList = ()=>{

    const { token } = useToken();
    const [ products, setProducts ] = useState([])

    useEffect(() => {
        fetch(API, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
              },
        })
        .then(res => res.json())
        .then(
            (result) => {
                setProducts(result)
            },
            (error) => {
                console.log(error)
            }
        )
    },[token] ) 

    return (
        <ListContainer>
            {products.map( product => <CardMMaterial key= {product.id} product={product} />)}
        </ListContainer>
    )
}