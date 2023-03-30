import {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import {getProducts ,getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList.js'

const ItemListContainer = () => {
    const [products, setProducts] = useState ([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])  
    
    return (
        <div>
            <ItemList products={products}/>
            
        </div>
        
    )
}
export default ItemListContainer