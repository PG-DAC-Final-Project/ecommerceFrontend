const FooterCaption = () => {
    return (
        <div>
            <hr />
            <div class="container-fluid" style={{ marginTop: 0 }}>
                <div class="row lh-1">
                    <div class="col">
                        <div>
                            <div className="row">
                                <div className="col-3 text-center iconPadd" >
                                    <i class="bi bi-bookmark-star-fill fa-2x"></i>
                                </div>
                                <div className="col-9">
                                    <div className="row">
                                        <label className="fs-4 footerMrg">Premium Quality Products</label>
                                    </div>
                                    <div className="row ">
                                        <p className="footerMrg text-muted footerContentMrg">All the clothing products are made from 100% premium quality fabric.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <div>
                            <div className="row">
                                <div className="col-3 text-center iconPadd">
                                    <i class="bi bi-shield-check fa-2x"></i>
                                </div>
                                <div className="col-9">
                                    <div className="row">
                                        <label className="fs-4 footerMrg">Secure Payments</label>
                                    </div>
                                    <div className="row ">
                                        <p className="footerMrg text-muted footerContentMrg">Highly Secured SSL-Protected Payment Gateway.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <div>
                            <div className="row">
                                <div className="col-3 text-center iconPadd">
                                    <i class="bi bi-arrow-repeat fa-2x"></i>
                                </div>
                                <div className="col-9">
                                    <div className="row">
                                        <label className="fs-4 footerMrg">7 Days Return Policy</label>
                                    </div>
                                    <div className="row ">
                                        <p className="footerMrg text-muted footerContentMrg">Return or exchange the orders within 7 days of delivery.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterCaption