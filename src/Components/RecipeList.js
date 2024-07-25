<<<<<<< HEAD
import React, { useEffect } from "react";
import { useGlobalState } from "../Context";
import style from './recipeList.module.css'
import { Link, Navigate, UNSAFE_NavigationContext, useNavigate } from "react-router-dom";
import WindowSize from "./windowSize";

export default function RecipeList(){

    const {scrollPosition, setScrollPosition, isFetchRun,recipesData, error, write, loading} = useGlobalState();

    const navigate = useNavigate();
    const myWindowSize = WindowSize();
    console.log("scrollPosition:L ", scrollPosition);
=======
import React from "react";
import { useGlobalState } from "../Context";
import style from './recipeList.module.css'
import { Link } from "react-router-dom";


export const RecipeList = () => {

    const {recipesData, error} = useGlobalState();
>>>>>>> feature/navbar
    function accessShortTitle(name){
        const words = name.trim().split(/\s+/);
        const rawTitle = words.slice(0, 4);
        const newTitle = rawTitle.join(' ')

        return words.length > 4? newTitle + '..' : newTitle
    }

<<<<<<< HEAD
    const handleDetailsClick = (id) => {
     
        const scrollPos = window.scrollY;
        // setScrollPosition(scrollPos);
     
        navigate(`/detail/${id}`, {state:{fromDetail:true} })
    }
    console.log("recipes in List; ", recipesData);


    // useEffect(() => {
    //     if(scrollPosition){
    //         window.scrollTo(0, parseInt(scrollPosition));
    //     }
    // }, [])



=======
>>>>>>> feature/navbar
    if (error) {
        return <div> <h2> Error while Fetching. Please Try Again </h2></div>
    }

<<<<<<< HEAD
    if (!write){
        return <h2> Search Your Dream Food</h2>
    }

    return (
        <> 
            <h2 className={style.heading}> {isFetchRun && recipesData.length > 0 && ' Special Recipes' }</h2>
            <h2 className={style.heading}> {isFetchRun && !recipesData.length && !loading &&' Not Found Search Related Recipe. Plz Try Something Else' }</h2>
            <ul className={style.recipesList}>
            {recipesData.map(recipe => {
                return(
                    <div key={recipe.id} className={style.recipeCard}>
                        <h5> {accessShortTitle(recipe.title)} </h5>
                        <img src={recipe.image_url} style={{width:"280px", height:"300px"}} />
                        <p> {recipe.publisher} </p>
                        <button className="btn btn-danger" onClick={(e) => handleDetailsClick(recipe.id)} >Detail </button>
                    </div>
                )
            })}
            </ul>  
=======
    
    console.log("recipes in List; ", recipesData);

    return (
        <> 
            <h2 className={style.heading}> Special Recipes</h2>
            {recipesData.length > 0 ? 
            (<ul className={style.recipesList}>
                {recipesData.map(recipe => {
                    return(
                        <div key={recipe.id} className={style.recipeCard}>
                            <h5> {accessShortTitle(recipe.title)} </h5>
                            <img src={recipe.image_url} style={{width:"280px", height:"300px"}} />
                            <p> {recipe.publisher} </p>
                            <button className="btn btn-danger"><Link to="detail">Detail</Link>  </button>
                        </div>
                    )
                })}
            </ul> ):
            (<h2> No Recipe Found</h2>)}
            
>>>>>>> feature/navbar
        </>
    )
}