import {useEffect , useState} from 'react'
import {getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [products, setProducts] = useState ([])

    useEffect(() => {
        getProducts()
            .then(products => {
                setProducts(products)
            })    
    }, [])        
    
    return (
        <div>
            <ItemList products={products}/>
            
        </div>
        
    )
}
export default ItemListContainer