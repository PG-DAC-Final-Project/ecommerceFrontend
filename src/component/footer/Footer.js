import CouponComponent from "./CouponComponent"
import FooterCaption from "./FooterCaption"
import UsefulLinksComponent from "./UsefulLinksComponent"

const Footer = () => {
    return (
        <div style={{ marginTop: 30 }}>
            <FooterCaption />
            <CouponComponent />
            <UsefulLinksComponent />
        </div>
    )
}

export default Footer