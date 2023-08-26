
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../component/navbar/Navbar"
import { URLUSER } from "../utils/config";
const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMob] = useState('')
    const [gender, setGender] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const navigate = useNavigate()
    const registerAction = () => {
        if (name.length == 0)
            toast.warning("enter name", { autoClose: 2000 });
        else if (email.length == 0)
            toast.warning("email is empty", { autoClose: 2000 });
        else if (mobile.length == 0 || mobile.length != 10)
            toast.warning("please enter a valid mobile number", { autoClose: 2000 });
        else if (gender.length == 0)
            toast.warning("please select a gender", { autoClose: 2000 });
        else if (password.length == 0)
            toast.warning("password is empty", { autoClose: 2000 });
        else if (confPassword.length == 0)
            toast.warning("enter password again", { autoClose: 2000 });
        else if (confPassword != password)
            toast.error("password doest not match", { autoClose: 2000 });
        else {
            const resultBody = {
                'name': name,
                'email': email,
                'mobile': mobile,
                'gender': gender,
                'password': password,
                'confirmPassword': confPassword
            }
            axios.post(`${URLUSER}/api/public/register`, resultBody).then((response) => {
                if (response.data.status === 'success') {
                    toast.success('registered successfully, please login!!')
                    navigate('/signin')
                }

            }).catch(error => {
                toast.error(error.response.data.message)
                setTimeout(() => {
                    window.location.reload();
                }, 2000);

            })
        }
    }

    return (
        <div className="mrgTop">
            <Navbar />
            <div className="row">
                <div className="col"></div>
                <div className="col bgCol">
                    <h1>Signup</h1>
                    <div className="form">
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mobile Number</label>
                            <input
                                type="number"
                                className="form-control"
                                onChange={(e) => {
                                    setMob(e.target.value)
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col">
                                    <label className="form-label text-center">Gender</label>
                                </div>
                                <div className="col">
                                    <div class="btn-group">
                                        <div>
                                            <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" onClick={() => setGender('Male')} />
                                            <label class="btn btn-secondary" for="option1">Male</label>
                                        </div>

                                        <div style={{ marginLeft: 5 }}>
                                            <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" onClick={() => setGender('Female')} />
                                            <label class="btn btn-secondary" for="option2">Female</label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                onChange={(e) => {
                                    setConfPassword(e.target.value)
                                }}
                            />
                        </div>
                        <div className="beforeBtn">
                            Already have an account, <Link to="/signin">Signin here</Link>
                        </div>
                        <button className="btn btn-primary" onClick={() => registerAction()}>
                            Register
                        </button>

                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Signup