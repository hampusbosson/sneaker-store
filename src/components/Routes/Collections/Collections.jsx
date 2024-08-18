import Layout from "../../../Layout";
import { useLocation } from "react-router-dom";

function Collections() {
    const { state } = useLocation();

    return (
        <Layout>
            <div className="text-black">
                {state.title}
            </div>
        </Layout>
    )
}

export default Collections;