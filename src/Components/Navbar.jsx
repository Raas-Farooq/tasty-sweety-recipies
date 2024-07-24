import React, { useEffect, useReducer, useRef } from "react";
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGlobalState } from "../Context";
import RecipeList  from "./RecipeList";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {

    const {scrollPosition,setScrollPosition, fetchFunctionRuns, startWriting, write ,searching, setSearchParameters, loading, fetchRecipes} = useGlobalState();
    let currentScrollPosition;
    const navigateTo = useNavigate();
    const searchBox = useRef(null);


    useEffect(() => {
        if(searchBox.current){
            searchBox.current.focus();
        }
    })

    if(loading){
        return <div> <h2> ..Loading</h2></div>
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        fetchRecipes(searching);
        fetchFunctionRuns();
        setSearchParameters("");
    }

    const handleFavoritesClick = (e) => {
        e.preventDefault();
        navigateTo('/favorites')
        
    }

    const handleHomeClick = (e) => {
        e.preventDefault();
        navigateTo('/')
    }


    if(searching){
        startWriting();
    }

    <h2><Link to="/" className="headingText"> TasTySweeTyRecipes </Link></h2>
    
    return(
        <>
            <nav className="nav-container">
                <div className="nav-header" aria-label="nav-header">
                    <h2><Link to="/" className="headingText"> TasTySweeTyRecipes </Link></h2>
                </div>    
                <form className="myForm" onSubmit={(e) => handleOnSubmit(e)}>
                    <label className="label"></label>
                    <input 
                    type="text" 
                    aria-label="search-recipe" 
                    className="search-text" 
                    placeholder="Search Your Favorite Recipes"
                    onChange={(e) => setSearchParameters(e.target.value)}
                    value={searching}
                    ref = {searchBox}
                    />

                </form>   
                <div className="navigation-btn">
                    <div> 
                        <button className={`homeBtn btn btn-danger`} aria-label="home-btn" onClick={(e) => handleHomeClick(e)}> HOME</button>
                        <button className="favBtn btn btn-danger" aria-label="fav-btn" onClick={(e) => handleFavoritesClick(e)}>Favorites </button>
                    </div>
                </div>
            </nav>

            
        </>
    )
}