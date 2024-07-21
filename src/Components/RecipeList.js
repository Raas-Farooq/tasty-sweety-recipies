import React from "react";
import { useGlobalState } from "../Context";
import style from './recipeList.module.css'
import { Link } from "react-router-dom";


export default function RecipeList(){

    const {recipesData, error} = useGlobalState();
    function accessShortTitle(name){
        const words = name.trim().split(/\s+/);
        const rawTitle = words.slice(0, 4);
        const newTitle = rawTitle.join(' ')

        return words.length > 4? newTitle + '..' : newTitle
    }

    if (error) {
        return <div> <h2> Error while Fetching. Please Try Again </h2></div>
    }

    
    console.log("recipes in List; ", recipesData);

    return (
        <> 
            <h2 className={style.heading}> {recipesData.length > 0 ? ' Special Recipes' : 'Not Found Search Related Recipe. Plz Try Something Else'}</h2>
            <ul className={style.recipesList}>
            {recipesData.map(recipe => {
                return(
                    <div key={recipe.id} className={style.recipeCard}>
                        <h5> {accessShortTitle(recipe.title)} </h5>
                        <img src={recipe.image_url} style={{width:"280px", height:"300px"}} />
                        <p> {recipe.publisher} </p>
                        <button className="btn btn-danger"><Link to={`/detail/${recipe.id}`} className={style.btnLink}>Detail</Link> </button>
                    </div>
                )
            })}
            </ul>  
        </>
    )
}