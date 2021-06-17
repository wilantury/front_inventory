import { CardMMaterial } from '../../components/cardMaterial'
import { ListContainer } from './styles'

export const ProductsList = ()=>{
    return (
        <ListContainer>
            {[1,2,3].map( id => <CardMMaterial key= {id}/>)}
        </ListContainer>
    )
}