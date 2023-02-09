import React from "react";
import Header from "./Header";

export default function Home(){

    return(
        <div id="Home">
            <Header/>
            <div className="bodyDiv">
                <div className="textP">
                    <h1>TIMBERLAND® PREMIUM SHOES</h1>
                </div>
                <div className="shoeE">
                    <img src="imgs/img/shoesErase1.png" alt="shoe"/>
                </div>
            </div>
        </div>
    )
}