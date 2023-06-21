import React,{Component} from 'react';
// import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './styles/Main.css';



class Footer extends Component{
    render(){
        return(
            <>
            
             <footer>
            <div className="pss">CONTACT US </div>
            <div className="heading-home">We provide the best solution to all the problems related solar you can compute the path of sun and also make quotations according to your budget</div>
           <div className="footer-flex">
            <div className="footer-iteam"><div className="hs">TALK WITH US</div>
          
            <div className="info">General: Sayhi@solarsolution.com</div>
            <div className="info">Support: Support@solarsolution.com</div>
            </div>
            
            <div className="footer-iteam"><div className="hs">SAY HELLO</div>
            <div className="sayhello"><input placeholder="Name"></input></div>
            <div className="sayhello"><input placeholder="Email"></input></div>
            <div className="sayhello"><input placeholder="Telephone"></input></div>
            <div className="sayhello"><button>Submit</button></div>
            </div>

            <div className="footer-iteam"><div className="hs">PRODUCTS</div>
            <div className="info1">Solar Panels</div>
            <div className="info1">Solar Batteries</div>
            <div className="info1">Solar Invertors</div>
            <div className="info1">Solar Wires</div>
            
         
            </div>

            <div className="footer-iteam"><div className="hs">KEEP CONNECTED</div>
            <div className="icon"> <div className="i">Facebook</div></div>
            <div className="icon"><div className="i">Instagram</div></div>
            <div className="icon"><div className="i">Twitter</div></div>
            </div>
            <div className="sc">All Rights Reserved By &copy; Solar Solutions 2023 </div>
           
           </div>
          
           </footer>
           
            </>
        )
    }

}
export default Footer;