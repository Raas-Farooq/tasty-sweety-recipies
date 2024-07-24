import React from "react";


export const Navbar = () => {


    return(
        <nav>
            <div className="nav-header">
                <h2>Recipes</h2>
            </div>       
            <navigator className="navigation-btn">
                <div> 
                    <button className="home">Home</button>
                    <button className="home">Favorites</button>
                </div>
            </navigator>
        </nav>
    )
}