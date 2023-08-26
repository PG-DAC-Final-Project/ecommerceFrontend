const Profile = () => {
    return (
        <div>
            <div className="row">
                <h2>MyProfile</h2>
                <p>You can edit/update your profile information by click on edit profile button.</p>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <p class="text-muted fs-6 nillMargin">FULL NAME</p>
                    <label class="labelFont text-uppercase">{sessionStorage.name}</label>
                </div>
                <div className="col-sm-6">
                    <p class="text-muted fs-6 nillMargin">EMAIL</p>
                    <label class="labelFont">{sessionStorage.email}</label>
                </div>
            </div>
            <div className="row" style={{ marginTop: 40 + "px" }}>
                <div className="col-sm-6">
                    <p class="text-muted fs-6 nillMargin">MOBILE NUMBER</p>
                    <label class="labelFont">+91-{sessionStorage.mobileNo}</label>
                </div>
                <div className="col-sm-6">
                    <p class="text-muted fs-6 nillMargin">ALTERNATE NUMBER</p>
                    <label class="labelFont"></label>
                </div>
            </div>
            <div className="row" style={{ marginTop: 40 + "px" }}>
                <div className="col-sm-6">
                    <p class="text-muted fs-6 nillMargin">DATE OF BIRTH</p>
                    <label class="labelFont">XX-XX-XXXX</label>
                </div>
                <div className="col-sm-6">
                    <p class="text-muted fs-6 nillMargin">GENDER</p>
                    <label class="labelFont">{sessionStorage.gender}</label>
                </div>
            </div>
            <div className="row" style={{ marginTop: 40 + "px" }}>
                <div className="col-6">
                    <button type="button" class="btn btn-danger btn-lg">Update</button>
                </div>
            </div>
        </div>
    )
}

export default Profile