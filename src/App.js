import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import NotFound from "./components/pages/NotFound";
import Layout from "./components/layouts/Layout";
import BlogCharacter from "./components/pages/BlogCharacter";
import {createContext, useState} from "react";

export const CharactersContext = createContext(undefined);

function App() {
    const [charactersList, setCharactersList] = useState(null);

    return (
        <div className="App p-5">
            <CharactersContext.Provider value={{charactersList, setCharactersList}}>
                <Navbar></Navbar>
                <h1>Rick & Morty</h1>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route element={<Home/>} path="/"></Route>
                        <Route element={<Contact/>} path="/contact"></Route>
                        <Route element={<Blog/>} path="/blog"></Route>
                        <Route element={<BlogCharacter/>} path="/blog/:id"></Route>
                        <Route element={<NotFound/>} path="*"></Route>
                    </Route>
                </Routes>
            </CharactersContext.Provider>
        </div>
    );
}

export default App;