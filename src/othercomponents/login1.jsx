import React,{Component} from 'react';
import loginimg1 from './image/login1.jpg';
import loginimg2 from './image/login1.jpg'
import dummy from './image/login4.jpg';
// import { FaFacebook, FaInstagram, FaTwitter,FaLock } from 'react-icons/fa';
// import { HiMail } from "react-icons/hi";
import './styles/login.css';


class Login1 extends Component{
    render(){

        return(
            <>
            
            <div className="login-container">
            <div className="login-image"><img src={loginimg1} alt={dummy}></img></div>
          
        



<div className="login-form">

    <div className="login-input">
        <div className="login-image2"><img src={loginimg2} alt={dummy}></img></div>
        <div className="login-heading">Welcome!</div>
        <div className="login-subheading">To Our New Website.</div>
        <div className="login-smallheading">Solution to All your problems</div>
        <div className="login-socialicons">
            <div className="facebook">
            {/* <FaFacebook/> */}
            </div>
            <div className="insta">
            {/* <FaInstagram/> */}
            </div>
            <div className="twitter">
            {/* <FaTwitter/> */}
            </div>

        </div>

    </div>

    <div className="login-input1">

        <div className="login-formhead">Admin Login </div>
        <div className="login-element"><input type="email" placeholder="Email"/><span className="mailicon">
        </span></div>
        <div className="login-element"> <input type="password" placeholder="Password"/><span className="iconn">
        </span></div>
        <div className="login-forpass">Forget Password?</div>
        <div className="login-element"><button>Sign In</button></div>
        {/* <div className="login-signup">Don't have an account? <Link className="me"to="/CreateAccount"><span className="es">Sign up</span></Link></div> */}
    </div>

    </div>
    </div>
            
            </>
        )
    }
}
export default Login1;