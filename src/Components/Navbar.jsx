import React from "react";
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGlobalState } from "../Context";
import RecipeList  from "./RecipeList";
import { Link } from "react-router-dom";

export const Navbar = () => {

    const {fetchFunctionRuns, startWriting, write ,searching, setSearchParameters, loading, fetchRecipes} = useGlobalState();

    if(loading){
        return <div> <h2> ..Loading</h2></div>
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        fetchRecipes(searching);
        fetchFunctionRuns();
        setSearchParameters("");
    }

    if(searching){
        startWriting();
    }

    return(
        <>
            <nav className="nav-container">
                <div className="nav-header" aria-label="nav-header">
                    <h2>TasTySweeTyRecipes</h2>
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

                    />

                </form>   
                <div className="navigation-btn">
                    <div> 
                        <button className={`homeBtn btn btn-danger`} aria-label="home-btn"><Link to="/" className="btnLink">Home</Link></button>
                        <button className="favBtn btn btn-danger" aria-label="fav-btn"><Link to="Favorites" className="favLink">Favorites </Link></button>
                    </div>
                </div>
            </nav>

            
        </>
    )
}