import React from "react";
import { useGlobalState } from "./Context/index";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import RecipeList from "./Components/RecipeList";
import Detail from "./Pages/detail";


export default function App(){
    
    const {recipesData} = useGlobalState();
    return (
        <>
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="recipeList" element ={<RecipeList />} />
                <Route path='/detail/:id' element={<Detail />} />
            </Routes>
            {recipesData.length > 0 && window.location.pathname === '/' && <RecipeList />}
        </div>
        </>
        
    )
}