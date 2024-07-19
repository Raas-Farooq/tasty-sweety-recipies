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
  const [error, setError] = useState(null);
  const [searching, setSearchParameters] = useState('');

  const navigateTo = useNavigate();

  const fetchRecipes = useCallback(async (search, id=null) => {
    setLoading(true);
    setError(null)
    console.log("search context:search ", search);
    let url = `https://forkify-api.herokuapp.com/api/v2/recipes`
    if(id){
      url +=`/${id}`
    }
    else{
      url += `?search=${search}`
    }
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("unable to fetch Recipes");
      }
      
      const dataResponse = await response.json();
      
      if(id){
        const recipe = dataResponse.data.recipe;
        console.log("single Detail: in context", recipe);
        return recipe;
      }
      else{
        const recipes = dataResponse?.data?.recipes;
        console.log("serch detail useContext:", recipes);
        setRecipesData(recipes);
        navigateTo('/');
        return recipes
      }
    } catch (error) {
      console.log("error while fetching Data from Api", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  
//   useEffect(() => {
//     console.log("recipe DATA Changes")
//   }, [recipesData]);


  return (
    <GlobalContext.Provider
      value={{
        recipesData,
        error,
        setLoading,
        loading,
        fetchRecipes,
        setSearchParameters,
        searching,
        setError
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalState = () => {
  return useContext(GlobalContext);
};
