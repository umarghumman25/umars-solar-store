import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import signupimage from './image/login4.jpg';
import dummy from './image/login4.jpg';
import './styles/signin.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Signin = () => {

    const history = useHistory();

    const [inputFields, setInputFields] = useState([
        { name: '0' }, { age: '0' }, { phonenumber: '0' }, { email: '0' }, { address: '0' }, { password: '0' }, { repassword: '0' },
        { error_list: [] },]);


    const handleFormChange = (index, e) => {
        let data = [...inputFields];
        if (index === 0) {

            data[0].name = e.target.value
            setInputFields(data);

        }
        else if (index === 1) {

            data[1].age = e.target.value
            setInputFields(data);

        }
        else if (index === 2) {

            data[2].phonenumber = e.target.value
            setInputFields(data);

        }
        else if (index === 3) {

            data[3].email = e.target.value
            setInputFields(data);

        }
        else if (index === 4) {

            data[4].address = e.target.value
            setInputFields(data);

        }
        else if (index === 5) {

            data[5].password = e.target.value
            setInputFields(data);

        }

        else {
            data[6].repassword = e.target.value
            setInputFields(data);

        }
    }

    const submit = async (e) => {
        e.preventDefault();
        const data = {
            name: inputFields[0].name,
            age: parseInt(inputFields[1].age),
            phonenumber: parseInt(inputFields[2].phonenumber),
            email: inputFields[3].email,
            address: inputFields[4].address,
            password: inputFields[5].password,
            repassword: inputFields[6].repassword,
        }
        // console.log(data);

        const res = await axios.post(`http://127.0.0.1:8000/api/register`, data);

        if (res.data.status === 200) {
            localStorage.setItem('auth_token', res.data.token);
            localStorage.setItem('auth_name', res.data.username);
            swal("success", res.data.message, "success");
            history.push('/');
        }
        else if (res.data.status === 401) {
            swal("warning", res.data.message, "warning");
        }
        else {
            setInputFields({ ...inputFields, error_list: res.data.validation_errors });
        }

    }



    return (
        <>
            <div className="signin-body">
                <div className="signupphoto"><img src={signupimage} alt={dummy}></img></div>
                <div className="signup-container">
                    <div className="signup-heading">Create Account</div>
                    <div className="line"></div>
                    <div className="signup-subcontainer">
                        <div className="element"><span className="a">Name:</span><input type="text" placeholder='Enter Name' name='name' onChange={e => handleFormChange(0, e)} />
                            <span>{inputFields?.error_list?.name}</span>
                        </div>
                        <div className="element"><span className="b">Age:</span><input type="text" placeholder='Enter Age' name='age' onChange={e => handleFormChange(1, e)} />
                            {/* <span>{inputFields.error_list.age}</span> */}
                        </div>
                        <div className="element"><span className="c">Phone Number:</span><input type="tel" placeholder='Enter Phone Number' name='phonenumber'
                            onChange={e => handleFormChange(2, e)} />
                            {/* <span>{inputFields.error_list.phonenumber}</span> */}
                        </div>
                        <div className="element"><span className="d">Email:</span><input type="email" placeholder='Enter Email' name='email' onChange={e => handleFormChange(3, e)} />
                            {/* <span>{inputFields.error_list.email}</span> */}
                        </div>
                        <div className="element"><span className="e">Address:</span><textarea placeholder="Enter your Address" name='address'
                            onChange={e => handleFormChange(4, e)} />
                            {/* <span>{inputFields.error_list.address}</span> */}
                        </div>
                        <div className="element"><span className="f">Password:</span><input type="password" placeholder='Enter Password' name='password'
                            onChange={e => handleFormChange(5, e)} />
                            {/* <span>{inputFields.error_list.password}</span> */}
                        </div>
                        <div className="element"><span className="g">Re-Enter:</span><input type="password" placeholder='Enter Confirm Password' name='repassword' onChange={e => handleFormChange(6, e)} />
                            {/* <span>{inputFields.error_list.repassword}</span> */}
                        </div>
                        <div className="element"><button onClick={submit}>Create Account</button></div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Signin;