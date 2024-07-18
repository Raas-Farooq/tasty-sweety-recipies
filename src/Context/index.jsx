import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const GlobalContext = createContext();
export default function GlobalState({ children }) {
  const [recipesData, setRecipesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchRecipes = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=pumpkin`
      );

      if (!response.ok) {
        throw new Error("unable to fetch Recipes");
      }
      const dataResponse = await response.json();

      const recipes = dataResponse?.data?.recipes;

      setRecipesData(recipes || []);
    } catch (error) {
      console.log("error while fetching Data from Api", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  return (
    <GlobalContext.Provider
      value={{
        recipesData,
        error,
        loading,
        fetchRecipes,
      }}
    >
      {children}{" "}
    </GlobalContext.Provider>
  );
}

export const useGlobalState = () => {
  return useContext(GlobalContext);
};
