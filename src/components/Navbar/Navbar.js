import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import Button from '../Button/Button'
const Navbar = () => {
    return (
        <nav className="navbar" >
            
            <h1 className="cyberpunk">Arasaka Corporation</h1>
            
            <div><Button/></div>
            <div><Button/></div>
            <div><Button/></div>
            <div><CartWidget/></div>
            
        </nav>
    )
}
export default Navbar