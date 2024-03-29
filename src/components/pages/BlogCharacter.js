import React, {useContext} from "react";
import {Link, useParams} from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import {CharactersContext} from "../../App";

const BlogCharacter = () => {
    const {charactersList} = useContext(CharactersContext);
    const params = useParams();
    const url = `https://rickandmortyapi.com/api/character/${params.id}`;
    const {data, loading, error} = useFetch(url);

    if(loading) return (<h1>Searching in the multiverse...</h1>);
    if(error) return (<h1>That character stopped existing...</h1>);

    return (
        <div className="my-5">
            <div className="d-flex justify-content-center my-5">
                <div className="card">
                    <img src={charactersList[params.id - 1].image} className="card-img-top" alt="Imagen del personaje"/>
                    <div className="card-body">
                        <h5 className="card-title">{charactersList[params.id - 1].name}</h5>
                        <p className="card-text">{charactersList[params.id - 1].species}</p>
                    </div>
                </div>
            </div>
            <p className="my-5"><Link to="/blog">Return</Link></p>
        </div>
    );

}

export default BlogCharacter;