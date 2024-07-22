import React from "react";
import { useGlobalState } from "../Context";
import style from './recipeList.module.css'
import { Link } from "react-router-dom";


export default function RecipeList(){

    const {isFetchRun,recipesData, error, write, loading} = useGlobalState();
    function accessShortTitle(name){
        const words = name.trim().split(/\s+/);
        const rawTitle = words.slice(0, 4);
        const newTitle = rawTitle.join(' ')

        return words.length > 4? newTitle + '..' : newTitle
    }

    if (error) {
        return <div> <h2> Error while Fetching. Please Try Again </h2></div>
    }

    if (!write){
        return <h2> Search Your Dream Food</h2>
    }
    console.log("recipes in List; ", recipesData);
    console.log("isFetchRun in List; ", isFetchRun);
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
                        <button className="btn btn-danger"><Link to={`/detail/${recipe.id}`} state={{fromDetail:true}} className={style.btnLink}>Detail</Link> </button>
                    </div>
                )
            })}
            </ul>  
        </>
    )
}