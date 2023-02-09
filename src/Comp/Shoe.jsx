import React from "react";
import { useDispatch } from "react-redux";

export default function Shoe({e}){
    const dispatch = useDispatch()
    return(
        <div className="shoesP">
            <div>
                <img src={e.src} alt=""/>
            </div>
            <div>
                <p>{e.price}$</p>
                <p>{e.desc}</p>
                <input onClick={()=>dispatch({type:'add',payload:{e:e}})} type='button' value='Add To Cart'/>
            </div>
        </div>
    )
}