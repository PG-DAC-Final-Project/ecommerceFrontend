import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

const LoginDropdown = () => {
    const navigate = useNavigate()
    const logout = () => {
        sessionStorage.removeItem('id')
        sessionStorage.removeItem('name')
        sessionStorage.removeItem('emailVerified')
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('mobileNo')
        sessionStorage.removeItem('role')
        sessionStorage.removeItem('tokenId')
        sessionStorage.removeItem('gender')
        toast.success('logout success', {
            position: toast.POSITION.BOTTOM_RIGHT
        })
        navigate('/home')
    }
    return (
        <div style={{ marginLeft: 10 + "px" }}>
            <div class="dropdown">
                <button class="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Hello, {sessionStorage.name}
                </button>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                    <li><Link class="dropdown-item" to="/myProfile">My Profile</Link></li>
                    <li><Link class="dropdown-item" to="/cart">Cart</Link></li>
                    {/* <li><button class="dropdown-item" onClick={()=>{document.getElementById('list-messages-list').click()}}>MyOrders</button></li> */}
                    <li><Link class="dropdown-item" to="/myProfile/myOrders">My Orders</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><button class="dropdown-item" onClick={() => logout()}>Logout</button></li>
                </ul>
            </div>
        </div>
    )
}

export default LoginDropdown