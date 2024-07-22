import React, {useState, useEffect, useCallback} from "react";
import { useLocation, useParams } from "react-router-dom";
import { useGlobalState } from "../Context";
import './detail.css';
import { Link } from "react-router-dom";

export default function Detail(){
   
    const [detailCard, setDetailCard] = useState([]);
    const [existed, setExisted] = useState(false);
    const {recipesData, fetchRecipes, loading} = useGlobalState();
    const {id} = useParams();
    const location = useLocation();

    
    const {fromDetail, fromFav} = location.state || {};

    
    function saveData(myFavorites){
        localStorage.setItem('favorites', JSON.stringify(myFavorites))
    }


    
     const handleFavoriteClick = async () => {

        const favoritesData = JSON.parse(localStorage.getItem('favorites')) || [];
        if(existed){ 
            const newFavorites = favoritesData.filter(fav => fav.id != detailCard.id);
            saveData(newFavorites)
        }
        else{
            favoritesData.push(detailCard);
            saveData(favoritesData);

        }
        setExisted(!existed)
        
    }   


    useEffect(() => {
        const gettingSingleRecipe = async () => {
            const singleCard = await fetchRecipes('null', id);
            setDetailCard(singleCard)
        };
        gettingSingleRecipe();
        console.log("detailCard useEffect ",detailCard);
    }, [id, fetchRecipes])

    
    useEffect(() => {
        if(detailCard){
            const favoritesData = JSON.parse(localStorage.getItem('favorites')) || [];
           
            const found = favoritesData.some(fav => fav.id === detailCard.id);
            console.log("found after Some: ", found);
            setExisted(found);
           
            
        }
    }, [detailCard])


    if(loading || !detailCard){
        return (<div> Wait ..</div>)
    }
    return (
        
            <div style={{display:"flex", gap:"40px"}}>
            {!loading && 
                <>
                   
                    <img src={detailCard.image_url} style={{width:"400px", height:'400px'}} />
                    
                    <div>
                       
                        <h6> {detailCard.publisher} </h6> 
                        <h2> {detailCard.title} </h2>
                        <button className="btn btn-warning" onClick={(e) => {
                            console.log("e.target.value:", e.target.value);
                            handleFavoriteClick()
                            }
                        }>
                            {existed ? 'Remove Favorite' : 'Add to Favorites' }
                        </button>
                        {detailCard && detailCard.ingredients? 
                        detailCard.ingredients.map((ing, ind) => 
                            
                            <>
                                
                                <p key={ind}> {`${ing.quantity ? ing.quantity: ''}  ${ing.unit}  ${ing.description}`} </p>
                                
                            </>
                         ):
                        <h5>No Ingridents Accessed</h5>} 
                    </div>
                </>
            }
                
                
            </div>
    )

}

