import React from "react";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className="container my-5">
            <Outlet></Outlet>
            <footer className="bg-dark text-white mt-5 p-5">
                <p className="fw-bold">
                    &#169; Made by Kevin Bruno Geisenhof Sáez with <a href="https://react.dev/" target="_blank">React</a>.
                    Information has been extracted from the <a href="https://rickandmortyapi.com/" target="_blank">Rick & Morty API</a>
                </p>
            </footer>
        </div>
    );
}

export default Layout;