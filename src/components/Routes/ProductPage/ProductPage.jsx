import { Link } from "react-router-dom"

function ProductPage() {
    return (
        <div>
            <p className="text-black">its working</p>
            <Link to="/" className="text-black">Go Back To Home Page!</Link>
        </div>
    )
}

export default ProductPage;