import './Button.css'
const Button = ({buttonName}) => {
    return <button className="btn">{buttonName}<span className="btn__glitch"></span><span className="btn__label">r25</span></button>
}
export default Button