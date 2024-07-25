import React from "react";
<<<<<<< HEAD
import { useGlobalState } from "./Context/index";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import RecipeList from "./Components/RecipeList";
import Detail from "./Pages/detail";
import Favorites from './Pages/Favorites.js';


export default function App(){
    
    const {recipesData} = useGlobalState();
=======
import { useGlobalState } from "./Context";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import { RecipeList } from "./Components/RecipeList";
import { Detail } from "./Pages/detail";

export default function App(){
    
    
>>>>>>> feature/navbar
    return (
        <>
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="recipeList" element ={<RecipeList />} />
<<<<<<< HEAD
                <Route path='/detail/:id' element={<Detail />} />
                <Route path='/favorites' element ={<Favorites />} />
            </Routes>
           
=======
                <Route path="/detail" element={<Detail />} />
            </Routes>
>>>>>>> feature/navbar
        </div>
        </>
        
    )
}