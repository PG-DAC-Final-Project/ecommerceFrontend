const AddressCard = (props) => {
    const {addressId,addressLine1,addressLine2,city,state,country,pin} = props.addr
    return (
        <div>
            <div className="container addressCardShadow" style={{marginTop: 20 + "px"}}>
                <div className="row">
                    <div class="d-flex bd-highlight mb-3">
                        <div class="p-2 bd-highlight labelFont text-uppercase">{sessionStorage.name}</div>
                        <div class="me-auto p-2 bd-highlight"><span class="badge rounded-pill bg-secondary">Home</span></div>

                        <div class="p-2 bd-highlight text-secondary">Edit</div>
                        <div class="p-2 bd-highlight">|</div>
                        <div class="p-2 bd-highlight text-danger">Remove</div>
                    </div>
                </div>
                <div className="row">
                <address>
                <p class="nillMargin fw-light">{addressLine1}</p>
                <p class="nillMargin fw-light">{addressLine2}</p>
                <p class="fw-light" >{city}, {state}, {country} - {pin}</p>
                <p class="fw-bold">Mobile - XXX-XXXX-XXX</p>
                </address>
                </div>
            </div>
        </div>
    )
}
export default AddressCard