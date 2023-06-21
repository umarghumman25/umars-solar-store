import React from 'react';
import img2 from './image/login.jpg';
import img4 from './image/main.jpg';
import homebattery from './image/homebattery.jpg';
import homepanel from './image/homepanel.jpg';
import homewire from './image/homewire.png';
import homeinvertor from './image/homeinvertor.jpg';
import Header from './Header';
import Footer from './Footer';
import{Link} from 'react-router-dom';
import './styles/Main.css';


const Main=()=> {
   


        return ( 

            <>
             <Header/>
            <div className = "background" > < img src = {img4} alt = {img2}/></div >
            <div className="tag">WELCOME TO OUR</div><div className="tag1">WEBSITE</div> 
            <Link to="/About"> <div className="sub-h">Learn More</div></Link>
            

            <div className="products">Our Products</div>
            <div className="home-body">
            <div className="home-product"><span className="home-heading">Batteries</span><Link className="s" to="/Store">< img src = {homebattery} alt = {img2}/></Link></div>
                <div className="home-product"><span className="home-heading">Solar Panels</span><Link className="s" to="/Store">< img src = {homepanel} alt = {img2}/></Link></div>
                <div className="home-product"><span className="home-heading">Invertors</span><Link className="s" to="/Store">< img src = {homeinvertor} alt = {img2}/></Link></div>
                <div className="home-product"><span className="home-heading">Wires</span><Link className="s" to="/Store">< img src = {homewire} alt = {img2}/></Link></div>
            </div>
            <Footer/>

            
        
           
          
            </>

        )
    }


export default Main;