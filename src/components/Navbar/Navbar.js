import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import Button from '../Button/Button'
const Navbar = () => {
    return (
        <nav className="navbar" >
            <h1>Arasaka Corporation</h1>
            <div><CartWidget/></div>
            
            <div><Button/></div>
            <div><Button/></div>
            <div><Button/></div>
            
            
        </nav>
    )
}
export default Navbar