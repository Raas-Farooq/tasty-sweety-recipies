import React from "react";
import { useGlobalState } from "./Context";

export default function App(){
    
    console.log("useGlobal :", useGlobalState())
    return (
        <div>
            <h2> Power Of Believe </h2>
        </div>
    )
}