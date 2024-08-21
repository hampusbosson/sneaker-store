import Layout from "../../../Layout";
//import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
//import CarouselButton from "../../Main/CarouselButton";
//import { searchSneakers } from "../../../api";

function Collections() {
    const { state } = useLocation();
    
    return (
        <Layout>
            <div className="text-black">
                <h1>{state.title}</h1>
            </div>
        </Layout>
    )
}

export default Collections;