import React, { Component } from 'react';
import img2 from './image/login.jpg';
import img3 from './image/logo.PNG';
import { NavLink } from 'react-router-dom';
import './styles/Main.css';
import Search from "../common/header/Search"

class Header extends Component{
    render(){
        return(
        <>
            <header>
                <div className="flex" >
                    <div className="logo" > <img src={img3} alt={img2} /></div >
                    <div className="iteam" ><NavLink className="s" to="/Main"> Home</NavLink> </div>
                    <div className="iteam" ><NavLink className="s" to="/Services"> Services</NavLink>  </div>
                    <div className="iteam" > <NavLink className="s" to="/Store"> Store</NavLink> </div>
                    <div className="iteam" >  <NavLink className="s" to="/About"> About</NavLink> </div>
                    <div className="person" >
                          
                        <button>LogOut</button>
                        </div>
                </div>
            </header>

        </>
    )
}
}
export default Header;