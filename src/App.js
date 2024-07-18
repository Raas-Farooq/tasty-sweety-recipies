import React from "react";
import { useGlobalState } from "./Context";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import { RecipeList } from "./Components/RecipeList";
import { Detail } from "./Pages/detail";

export default function App(){
    
    
    return (
        <>
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="recipeList" element ={<RecipeList />} />
                <Route path="/detail" element={<Detail />} />
            </Routes>
        </div>
        </>
        
    )
}