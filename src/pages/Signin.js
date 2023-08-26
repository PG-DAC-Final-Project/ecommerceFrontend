import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../component/navbar/Navbar"
import { URLAUTH, URLUSER } from "../utils/config";
const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const qs = require('qs')
    const SignInAction = () => {
        if (email.length == 0) toast.warning("enter email", { autoClose: 2000 });
        else if (password.length == 0)
            toast.warning("password is empty", { autoClose: 2000 });
        else {
            const resultBody = qs.stringify({
                'username': email,
                'password': password,
                'scope': 'read write',
                'grant_type': 'password',
                'client_id': 'Mobile'
            })
            const basicAuth = 'Basic ' + btoa("Mobile" + ':' + "test");
            const URL = `${URLAUTH}/oauth/token`
            axios.post(URL, resultBody, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `${basicAuth}`
                }
            }).then(res => {
                sessionStorage.tokenId = res.data.access_token
                console.log("tokenId : " + sessionStorage.tokenId)
                axios.get(`${URLUSER}/user/getUserDetails`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${sessionStorage.tokenId}`
                    }
                }).then(response => {
                    console.log(response.data)
                    const { email, emailVerified, id, mobileNo, name, role, gender} = response.data.data
                    sessionStorage.email = email
                    sessionStorage.emailVerified = emailVerified
                    sessionStorage.id = id
                    sessionStorage.mobileNo = mobileNo
                    sessionStorage.name = name
                    sessionStorage.role = role
                    sessionStorage.gender = gender
                    navigate('/home')
                    toast.success('login success', {
                        position: toast.POSITION.BOTTOM_RIGHT
                    })

                })
            }).catch(error => {
                if (error.response.status)
                    toast.error('Incorrect credentials!!')
            })
        }
    };
    return (
        <div className="mrgTop">
            <Navbar />
            <div className="row ">
                <div className="col"></div>
                <div className="col bgCol">
                    <div className="heading">
                        <h1>Signin</h1>
                    </div>
                    <div className="form">
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>
                        <div>New user? please <Link to='/signup'>Signup</Link> </div>
                        <div className="row btnRow">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <button className="btn btn-primary" onClick={() => SignInAction()}>
                                        Signin
                                    </button>
                                </div>
                                <div>
                                    <Link id="verifyBtn" to='/forgotPassword'>
                                        Forgot password
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col"></div>
            </div>
        </div>
    );
};

export default Signin;
