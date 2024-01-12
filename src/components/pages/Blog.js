import React from "react";
import useFetch from "../../hooks/useFetch";
import {Link, useSearchParams} from "react-router-dom";

const Blog = () => {
    const {data, error, loading} = useFetch("https://rickandmortyapi.com/api/character");
    let [searchParams, setSearchParams] = useSearchParams();

    if(loading) return (<h1>Searching for the right Morty...</h1>);
    if(error) return (<h1>The portal gun doesn't work, Rick...</h1>);
    
    const handleChange = (e) => {
      setSearchParams({[e.target.name]: e.target.value});
    }

    const removeSpacesAndPunctuation = (inputString) => {
        if(!inputString){
            return "";
        }
        return inputString.replace(/\s+/g, '').replace(/[^\w\s]/g, '');
    }

    return (
        <div className="my-5">
            <h1>Blog - Choose or search for your favorite character</h1>
            <input type="text" name="filter" onChange={handleChange} className="form-control my-5"
                   alt="Search bar" placeholder="Search for a character..." value={searchParams.get("filter") || ""}></input>
            <ul className="list-group">
                {
                    data.results.map(item => {
                        let itemNameValue = removeSpacesAndPunctuation(item.name).toLowerCase();
                        let filterValue = removeSpacesAndPunctuation(searchParams.get("filter")).toLowerCase();

                        if(itemNameValue.includes(filterValue) || !filterValue){
                            return (<Link className="list-group-item" key={item.id} to={`/blog/${item.id}`}>{item.name}</Link>)
                        }
                    })
                }
            </ul>
        </div>
    );
}

export default Blog;