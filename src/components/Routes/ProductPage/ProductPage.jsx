import Layout from "../../../Layout";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductPage() {
  const { state } = useLocation();
  const { item } = useParams;

  return (
    <Layout>
      <h1 className="text-black">{item}</h1>
      <img src={state.imgSrc} alt={state.alt} className="w-full h-full" />
      <p className="text-black">{state.brand}</p>
      <p className="text-black">{state.name}</p>
      <p className="text-black">{`$${state.price}`}</p>
      <Link to="/" className="text-black">
        Go Back To Home Page!
      </Link>
    </Layout>
  );
}

export default ProductPage;
