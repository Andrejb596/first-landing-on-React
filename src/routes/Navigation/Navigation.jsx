import { NavLink } from "react-router-dom";
import { routs } from "../utils/objOfRouts";
import { Logo } from "../../components/Logo/Logo";

import './navigation.scss'


export const Navigation = () => {

  return (
    <nav className='navigation'>
      <div className="container">
        <div className="navigationRow">
          <Logo>CutSpace</Logo>
          <ul className="menu">
            <li><NavLink to={routs.Home}>Home</NavLink></li>
            <li><NavLink to={routs.AboutUs}>About us</NavLink></li>
            <li><NavLink to={routs.FindSpacemen}>Find space</NavLink></li>
            <li><NavLink to={routs.ShareSpace}>Share space</NavLink></li>
            <li><NavLink to={routs.PromoteSpace}>Promote space</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
