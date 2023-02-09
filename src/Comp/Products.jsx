import React from "react";
import Header from "./Header";
import Shoe from "./Shoe";

export default function Products({objs}){
    return(
        <>
            <Header/>
            <div id="Products">
                {objs.map(e=>
                    <Shoe key={e.id} e={e}/>
                )}
            </div>
        </>
    )
}