const CouponComponent = () => {
    return (
        <div>
            <div className="offerBg">
                <div class="container" style={{ marginTop: 0, paddingTop: 20 }}>
                    <div class="row lh-1" >
                        <div class="col" style={{ paddingLeft: 0 }}>
                            <div className="row">
                                <label className="fs-4 footerMrg">Get Coupons & Offers</label>
                            </div>
                            <div className="row " >
                                <p className="footerMrg text-muted footerContentMrg" style={{ paddingRight: 100 }}>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</p>
                            </div>
                        </div>
                        <div class="col">
                            <div className="row ">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Your email address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button class="btn btn-danger" type="button" id="button-addon2">Subscribe</button>
                                </div>
                            </div>
                            <div className="row ">
                                <p className="footerMrg text-muted footerContentMrg"><span className="text-danger">*</span> Don't worry we don't spam</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CouponComponent