import { useCart } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import './Cart.css'
const Cart = () => {
    const { cart, total, clearCart } = useCart()

    return (
        <div className="cart">
            <h1>Your Purchases</h1>
            
            <div>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id} className="onCart">
                                <h2>{prod.name}</h2>
                                <h2>Cantidad: {prod.quantity}</h2>
                                <h2>${prod.price} x Unidad</h2>
                               
                            </div>
                        )
                    })
                }
            </div>
            <button className="botonVaciar" onClick={() => clearCart()}>Vaciar carrito</button>
            <h1>Total de la compra ${total}</h1>
            <button><Link to='/checkout' className="btnchk">Checkout</Link></button>
        </div>
    )
}

export default Cart