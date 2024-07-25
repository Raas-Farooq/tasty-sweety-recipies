import App from '../App.js';
<<<<<<< HEAD
import RecipeList from '../Components/RecipeList.js';
import { useGlobalState } from '../Context/index.jsx';

export default function Home(){

    const {searching} = useGlobalState();
    const searchValue = searching;
    // console.log("checkout the Searching: ", searching);
    return(
        <>
          <RecipeList search = {searching} />
=======

export default function Home(){


    return(
        <>
            <h2>Render The Recipes Here</h2>
>>>>>>> feature/navbar
        </>
    )
}