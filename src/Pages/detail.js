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
        
            <div style={{textAlign:'center'}}>
            {!loading && 
                <>
                    <h2> {detailCard.title} </h2>
                    <img src={detailCard.image_url} style={{width:"300px"}} />
                    <h5> {detailCard.publisher} </h5>

                    <h6> {detailCard.cooking_time} </h6>
                    <h6> {detailCard.servings} </h6>
                    
                    <div>
                        {detailCard && detailCard.ingredients? 
                        detailCard.ingredients.map((ing, ind) => 
                            
                            <>
                                <table>  

                                    <tr>
                                        <th>ingredient {ind + 1} </th>
                                        <th>Quantity </th>
                                        {ing.unit && <th> Unit </th>} 
                                    </tr>
                                    
                                    <tr>
                                        <td>{ing.description}</td>
                                        <td>{ing.quantity}</td>
                                        <td>{ing.unit}</td>
                                    </tr>
                                        
                                </table>
                    
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