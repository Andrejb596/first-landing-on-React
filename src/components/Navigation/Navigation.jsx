// import React from 'react'
import { HashRouter, Routes as Switch, Route, NavLink } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { AboutUs } from "../../pages/AboutUs/AboutUs";
import { FindSpace } from "../../pages/FindSpace/FindSpace";
import { ShareSpace } from "../../pages/ShareSpace/ShareSpace";
import { PromoteSpace } from "../../pages/PromoteSpace/PromoteSpace";
import './navigation.scss'
import logo from '../../assets/icons/icon.svg'

const routs = {
  Home: 'Home',
  AboutUs: 'AboutUs',
  FindSpaceme: 'FindSpace',
  ShareSpace: 'ShareSpace',
  PromoteSpace: 'PromoteSpace'
}

export const Navigation = () => {
  return (
    <HashRouter>
      <nav className='navigation'>
        <div className="container">
          <div className="navigationRow">
            <div className="logo">
              <img src={logo} alt="logo" />
              <span>CutSpace</span>
            </div>
            <ul className="menu">
              <li><NavLink to={routs.Home} className="navLink">Home</NavLink></li>
              <li><NavLink to={routs.AboutUs} className="navLink">About us</NavLink></li>
              <li><NavLink to={routs.FindSpaceme} className="navLink">Find space</NavLink></li>
              <li><NavLink to={routs.ShareSpace} className="navLink">Share space</NavLink></li>
              <li><NavLink to={routs.PromoteSpace} className="navLink">Promote space</NavLink></li>
            </ul>
          </div>
          <Switch>
            <Route path={routs.Home} element={<Home />} />
            <Route path={routs.AboutUs} element={<AboutUs />} />
            <Route path={routs.FindSpaceme} element={<FindSpace />} />
            <Route path={routs.ShareSpace} element={<ShareSpace />} />
            <Route path={routs.PromoteSpace} element={<PromoteSpace />} />
          </Switch>
        </div>
      </nav>
    </HashRouter>
  )
}
