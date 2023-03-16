import logo from './assets/cart.svg'
import './CartWidget.css'
const CartWidget = () => {
return (
    <div className="widget">
        <img src={logo} alt='cart-widget'/>
        0
    </div>
)

}
export default CartWidget