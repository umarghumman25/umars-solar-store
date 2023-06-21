import React ,{Component}from "react";
import aboutimg1 from './image/umar.jpeg';
import aboutimg2 from './image/shahzaib.jpeg';
import aboutimg3 from './image/ali3.jpeg';
import dummy from './image/electricloadusage.jpg';
import Header from './Header';
import Footer from './Footer';
import './styles/about.css';

class About extends Component{
    render(){
        
        return(
            <>
            <Header/>
            <div className="about-body">
                <div className="objective-about">
                    <div className="about-heading">Our Objective</div>
                    <div className="about-content">
 Our objective is to develop the web application which will do shadow analysis using image
processes on required image of the roof top and estimate the shadow on the roof so we can
place the panels in certain area which will shadow free.Estimate the sun path, according to the sun path it will show an angle for panels so user can install the sun faced solar panels to generate maximum electricity.Develop a system which will estimate electric power usage and recommend the suitable solar system, solar products and calculate the cost of the solar system.</div>
                </div>
                <div className="about-main">
                <div className="about-person">
                    <div className="about-image"><img src={aboutimg1} alt={dummy}/></div>
                    <div className="about-name-2">Umer Farooq</div>
                    <div className="about-status">(Developer)</div>
                </div>
                <div className="about-person">
                <div className="about-image"><img src={aboutimg2} alt={dummy}/></div>
                <div className="about-name-1">Shahzaib Sharafat</div>
                <div className="about-status">(Developer)</div>
                </div>
                <div className="about-person">
                <div className="about-image"><img src={aboutimg3} alt={dummy}/></div>
                <div className="about-name">Ali Ahsen</div>
                <div className="about-status">(Developer)</div>
                </div>
                </div>
                
            </div>
            <Footer/>
            </>
            
        )
        
    }
}
export default About;