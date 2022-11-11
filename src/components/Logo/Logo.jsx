import './logo.scss'
import logo from '../../assets/icon.svg'

export const Logo = ({children}) => {
    return (
        <div className="logo">
            <img src={logo} alt="logo" />
            <span>{children}</span>
        </div>
    )
}
