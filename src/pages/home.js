import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return <div>
        home
        <div>
            <Link to="./about">
                <button>about</button>
            </Link>
        </div>
    </div>
}
export default Home