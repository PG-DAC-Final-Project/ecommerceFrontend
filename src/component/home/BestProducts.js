import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import ExploreCard from "./ExploreCard"
import HeadLine from "./HeadLine"

const BestProducts = () => {
    const navigate = useNavigate()
    return (
        <div>
            <HeadLine text="Best Products" subText="Way is there to get clothing you’re sure to love than by making it your know" />
            <div class="container" style={{ marginTop: 0 }}>
                <div class="row row-cols-3 row-cols-lg-4 g-2 g-lg-3">
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                </div>
            </div>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <button class="btn btn-outline-danger" data-mdb-ripple-color="dark" onClick={() => {
                        navigate('/products', { state: { catg: 'T-Shirts' } })
                    }}>View All Products<i class="fas fa-arrow-right" style={{ marginLeft: 5 + "px" }} />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default BestProducts