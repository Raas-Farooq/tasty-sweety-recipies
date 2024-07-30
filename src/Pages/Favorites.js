import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGlobalState } from "../Context";

const Favorites = () => {
  const { recipesData } = useGlobalState();
  const [targetId, setTargetId] = useState("");
  const [favoritesList, setFavoritesList] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const location = useLocation();



function getShortTitle(title){
    const text = 'go To Hike And Challenge Yourself';
    const trimSplit = title.trim().split(/\s+/);
    const words = trimSplit.slice(0, 3);
    const shortTitle =  words.join(' ');
    
    return trimSplit.length > 4 ?  shortTitle + '..': shortTitle
  
   }
  
  const [recipe, setRecipe] = useState("");
  const { fromFav, id } = location.state || {};

  const handleSeeMoreDetails = (favId) => {
    
    // setTargetId(favId === targetId ? null : favId);

    setTargetId(favId === targetId ? null : favId);
    // setShowDetails(!showDetails);
  };

  useEffect(() => {
    const favoritesData = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoritesList(favoritesData);

    console.log("showDetails in useEffect: ", showDetails);
  }, [id]);


  
  
  return (
    <div>
      <ul style={{ display: "flex", flexWrap: "wrap", gap:'25px' }}>
        {favoritesList ? (
          favoritesList.map((favorite) => (
            <li style={{ listStyle:'none' }}>
              <div
                className="myRecipeCard"
                key={favorite.id}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <h4> {getShortTitle(favorite.title)} </h4>
                <img
                  src={favorite.image_url}
                  style={{ width: "300px", height: "280px" }}
                />

                <button
                  className="btn btn-warning"
                  onClick={(e) => {
                    handleSeeMoreDetails(favorite.id);
                  }}
                  style={{ width: "fit-content" }}
                >
                  {" "}
                  {targetId === favorite.id ? "Hide Details" : "See More Detail"}{" "}
                </button>
                {favorite.id === targetId && (
                  <div className="ingredients">
                    {favorite && favorite.ingredients && (
                      favorite.ingredients.map((ing, ind) => (
                        <p key={ind}>
                          {" "}
                          {`${ing.quantity ? ing.quantity : ""}  ${ing.unit}  ${
                            ing.description
                          }`}{" "}
                        </p>
                      ))
                    )}
                  </div>
                )}
              </div>
            </li>
          ))
        ) : (
          <h2> Wait..</h2>
        )}
      </ul>
    </div>
  );
};

export default Favorites;
