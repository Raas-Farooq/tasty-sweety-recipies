import React, {useState, useEffect, useCallback} from "react";
import { useParams } from "react-router-dom";
import { useGlobalState } from "../Context";
import './detail.css';


export default function Detail(){
    console.log("DETAIL IS RUNNING");
    const [detailCard, setDetailCard] = useState([]);
    const {recipesData, fetchRecipes, loading} = useGlobalState();
    const {id} = useParams();
   
    const gettingSingleRecipe = async() => {
        const recipeDetail = await fetchRecipes(null, id);
        console.log("recipeDetail ",recipeDetail);
        setDetailCard(recipeDetail);
    }
    

    useEffect(() => {
        gettingSingleRecipe();
        console.log("detailCard useEffect ",detailCard);
    }, [id])

    
    return (
        
            <div style={{display:"flex", gap:"40px"}}>
            {!loading && 
                <>
                   
                    <img src={detailCard.image_url} style={{width:"400px", height:'400px'}} />
                    
                    <div>
                       
                        <h6> {detailCard.publisher} </h6> 
                        <h2> {detailCard.title} </h2>
                        <button className="btn btn-warning">Favorites</button>
                        {detailCard && detailCard.ingredients? 
                        detailCard.ingredients.map((ing, ind) => 
                            
                            <>
                                
                                <p> {`${ing.quantity ? ing.quantity: ''}  ${ing.unit}  ${ing.description}`} </p>
                                
                            </>
                         ):
                        <h5>No Ingridents Accessed</h5>} 
                    </div>
                </>
            }
                
                
            </div>
    )

}

{/* <span style={{fontWeight:"bolder"}}></span> */}
// export default function Detail() {
//     const { recipesData } = useGlobalState();
//     const { id } = useParams();
    
//     const recipe = recipesData.find(recipe => recipe.id === id);
  
//     if (!recipe) {
//       return <h2>Recipe not found</h2>;
//     }
  
//     const { title, image_url, publisher } = recipe;
  
//     return (
//       <>
//         <h2>{title}</h2>
//         <img src={image_url} alt={title} style={{width: '300px', height: '300px'}} />
//         <h4>{publisher}</h4>
//       </>
//     );
//   }