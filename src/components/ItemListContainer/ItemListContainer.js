import {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList.js'
import { db } from '../services/firebase/firebaseConfig'
import { getDocs, collection, query, where } from 'firebase/firestore'
const ItemListContainer = () => {
    const [products, setProducts] = useState ([])

    const { categoryId } = useParams()

    useEffect(() => {
        

        const productsRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(productsRef)
            .then(snapshot => {
                    const productsAdapted = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setProducts(productsAdapted)
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