import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { URLUSER } from "../../utils/config";

const ChangePassword = () => {
    const [oldPassword, setOldPass] = useState("")
    const [newPassword, setNewPass] = useState("")
    const [confPassword, setConfPass] = useState("")

    const redirectToProfile = ()=> {
        document.getElementById('list-home-list').click()
    }

    const resetPassword = () => {
        if (oldPassword.length == 0)
            toast.warning("please enter old password first!!")
        else if (newPassword.length == 0)
            toast.warning("please enter new password!!")
        else if (confPassword.length == 0)
            toast.warning("please confirm password!!")
        else {
            const resultBody = {
                'oldPassword': oldPassword,
                'newPassword': newPassword,
                'confirmPassword': confPassword
            }
            const resetUrl = `${URLUSER}/user/resetpassword/`
            axios.post(resetUrl, resultBody, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.tokenId}`
                }
            }).then((response) => {
                toast.success(response.data.message)
                redirectToProfile()
            }).catch((error) => {
               toast.error(error.response.data.message)
            })
        }
    }

    return (
        <div>
            <h3>Change Password Component</h3>
            <div className="form col-6">
                <div className="mb-3">
                    <label className="form-label">Old Password</label>
                    <input
                        type="password"
                        className="form-control"
                        onChange={(e) => {
                            setOldPass(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">New Password</label>
                    <input
                        type="password"
                        className="form-control"
                        onChange={(e) => {
                            setNewPass(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        onChange={(e) => {
                            setConfPass(e.target.value);
                        }}
                    />
                </div>
            </div>
            <div className="row" style={{ marginTop: 40 + "px" }}>
                <div className="col-6">
                    <button type="button" class="btn btn-danger btn-lg" onClick={() => resetPassword()}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword