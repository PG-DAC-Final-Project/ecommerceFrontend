import img2 from '../../images/1.jpg'
const ExploreCard = () => {
    return (
        <div className="container">
            <div class="col">
                <div class="p-2">
                    <div className="p-1 bg-light">
                        <div className="card">
                            <img src={img2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Shirts</h5>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreCard