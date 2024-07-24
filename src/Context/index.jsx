import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";
const GlobalContext = createContext();


export default function GlobalState({ children }) {

  const [recipesData, setRecipesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searching, setSearchParameters] = useState('');

  const navigateTo = useNavigate();
  const fetchRecipes = useCallback(async (search) => {
    setLoading(true);
    console.log("search context:search ", search);
    
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );

      if (!response.ok) {
        throw new Error("unable to fetch Recipes");
      }
      
      const dataResponse = await response.json();

      const recipes = dataResponse?.data?.recipes;

      setRecipesData(recipes);
    //   if(recipesData){
    //     console.log("Running");
    //     setLoading(false);
    //     setSearchParameters("");
    //     navigateTo("/")
    //   }
      console.log('recipes DAta: ', recipes)
    } catch (error) {
      console.log("error while fetching Data from Api", error);
      setError(true);
    } finally {
      setError(false);
      setLoading(false);
    }
  }, []);

  
  useEffect(() => {
    if (recipesData.length > 0) {
      navigateTo("recipeList");
      
    }
  }, [recipesData, navigateTo]);


  return (
    <GlobalContext.Provider
      value={{
        recipesData,
        error,
        loading,
        fetchRecipes,
        setSearchParameters,
        searching
      }}
    >
      {children}{" "}
    </GlobalContext.Provider>
  );
}

export const useGlobalState = () => {
  return useContext(GlobalContext);
};
