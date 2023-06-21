import React, { Component } from 'react';
import loginimg1 from './image/login1.jpg';
import loginimg2 from './image/login1.jpg'
import dummy from './image/login4.jpg';
// import { FaFacebook, FaInstagram, FaTwitter,FaLock } from 'react-icons/fa';
// import { HiMail } from "react-icons/hi";
import './styles/login.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { useState } from 'react';
import swal from 'sweetalert';

const AdminLogin = () => {
    const history = useHistory();
    //const navigate = useNavigate();
    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({ ...loginInput, [e.target.name]: e.target.value });
    }

    const loginSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }

        axios.post(`http://127.0.0.1:8000/api/admin/login`, data).then(res => {
            if (res.data.status === 200) {
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_name', res.data.username);
                swal("success", res.data.message, "success");
                window.location.href = 'http://localhost:8000/dashboard';
            }
            else if (res.data.status === 401) {
                swal("warning", res.data.message, "warning");
            }
            else {
                setLogin({ ...loginInput, error_list: res.data.validation_errors });

            }

        });

    }



    return (
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
                        <form onSubmit={loginSubmit}>
                            <div className="login-element">
                                <input type="email" name='email' placeholder="Email" onChange={handleInput} value={loginInput.email} className="form-control" />
                                <span className="mailicon"> </span>{/* <span>{inputFields.error_list.name}</span> */}</div>
                            <div className="login-element">
                                <input type="pass" name='password' placeholder="Password" onChange={handleInput} value={loginInput.password} className="form-control" />
                                <span className="iconn"></span>{/* <span>{inputFields.error_list.password}</span> */}</div>
                            <div className="login-element"><button type="submit">Login</button>
                            </div>

                            <div className="loginoption"> <button >Register As Admin</button></div>  </form>
                    </div>

                </div>
            </div>

        </>
    )
}
export default AdminLogin;