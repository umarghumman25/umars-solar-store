import React, { Component }  from 'react';
import{Link} from 'react-router-dom';
import featureimg1 from './image/computepathofsun.jpg';
import featureimg2 from './image/electricloadusage.jpg';
import featureimg3 from './image/solarsystemcost.jpg';
import featureimg4 from './image/roi.jpg';
import featureimg5 from './image/shadowanalysis.jpg';
import dummy from './image/home.jpg';
import Header from './Header';
import Footer from './Footer';
import './styles/features.css';


class Feature extends Component{
    render(){
    return(
        <>
        <Header/>
       <div className="feature-body">
        <div className="feature-heading">Our Services</div>
        <div className="feature-flex">
        <div className="ff">
            <div className="picture"><img src={featureimg1} alt={dummy}/></div>
            <div className="heading">Compute Path of the Sun</div>
            
        
        </div>
        <div className="ff">
            <div className="picture"><img src={featureimg2} alt={dummy}/></div>
             <div className="heading"><Link className="feature" to="/Feature2">Calculate Electric Load</Link></div>
    
        
        </div>
        <div className="ff">
            <div className="picture"><img src={featureimg3} alt={dummy}/></div>
            <div className="heading1"><Link className="feature" to="/SolarProjectCost">Calculate Solar System Cost</Link></div>
   
        
        </div>
        </div>
        <div className="feature-flex-2">
        <div className="ff">
            <div className="picture"><img src={featureimg4} alt={dummy}/></div>
            <div className="heading1"><Link className="feature" to="/Feature3"> Return on investment</Link></div>
            
        
        </div>
        <div className="ff">
            <div className="picture"><img src={featureimg5} alt={dummy}/></div>
            <div className="heading1"><Link className="feature" to="/Feature4">Calculate Shadow Analysis</Link></div>
        </div>
        
        </div>
       
       
       </div>
       <Footer/>
        
        </>
    )
    }
    
}


export default Feature;