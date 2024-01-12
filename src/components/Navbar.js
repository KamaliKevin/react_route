import React from "react";
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark my-5">
            <div className="container">
                <NavLink className="btn btn-outline-primary" to="/">Home</NavLink>
                <NavLink className="btn btn-outline-primary" to="/contact">Contact</NavLink>
                <NavLink className="btn btn-outline-primary" to="/blog">Blog</NavLink>
            </div>
        </div>
    );
}

export default Navbar;