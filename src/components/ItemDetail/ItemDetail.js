import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useNotification } from '../../notification/NotificationService'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    
    const { addItem, isInCart } = useCart()
    const { setNotification } = useNotification()
    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        addItem(productToAdd)
        setNotification('success', `Succesfully added ${quantity} ${name}`)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="itemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Category: {category}
                </p>
                <p className="Info">
                    Description: {description}
                </p>
                <p className="Info">
                    Price: {price}
                </p>
                <p className="Info">
                    stock: {stock}
                </p>
            </section>           
            <footer className='ItemFooter'>
            {
                    isInCart(id) ? (
                        <Link to='/cart'>Terminar compra</Link>
                    ) : (
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail