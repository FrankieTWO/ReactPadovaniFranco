import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import Button from '../Button/Button'
import { Link , NavLink } from 'react-router-dom'
const Navbar = (props) => {
    return (
        <nav className="navbar" >
            <Link to ='/'>
            <h1 className="cyberpunk">Arasaka Corporation</h1>
            </Link>
            <div><NavLink to='/category/Cyberware' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}><Button buttonName = "Cyberware"/></NavLink></div>
            <div><NavLink to='/category/Katana' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}><Button buttonName = "Katana"/></NavLink></div>
            <div><NavLink to='/category/Weapons' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}><Button buttonName = "Weapons"/></NavLink></div>
            <div><CartWidget/></div>
            
        </nav>
    )
}
export default Navbar