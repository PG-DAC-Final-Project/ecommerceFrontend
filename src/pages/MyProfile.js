import { useEffect } from "react"
import { useNavigate } from "react-router"
import Navbar from "../component/navbar/Navbar"
import Footer from "../component/footer/Footer"
import Address from "../component/profile/Address"
import ChangePassword from "../component/profile/ChangePassword"
import MyOrders from "../component/profile/MyOrders"
import Profile from "../component/profile/Profile"

const MyProfile = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!sessionStorage.id)
            navigate('/signin')
    }, [])
    return (
        <div>
            <Navbar />
            <div className="container" style={{ marginTop: ' 67px' }}>
                <div class="row" style={{ padding: ' 40px' }}>
                    <div class="col-3">
                        <div class="list-group" id="list-tab" role="tablist">
                            <a class="list-group-item list-group-item-action active  customFont" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Profile</a>
                            <a class="list-group-item list-group-item-action customFont" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Address</a>
                            <a class="list-group-item list-group-item-action customFont" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">MyOrders</a>
                            <a class="list-group-item list-group-item-action customFont" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Change Password</a>
                        </div>
                    </div>
                    <div class="col-9" style={{ paddingLeft: ' 40px' }}>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active " id="list-home" role="tabpanel" aria-labelledby="list-home-list"><Profile /></div>
                            <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"><Address /></div>
                            <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"><MyOrders /></div>
                            <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list"><ChangePassword /></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MyProfile