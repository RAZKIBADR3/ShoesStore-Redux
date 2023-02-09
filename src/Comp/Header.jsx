import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'

export default function Header(){
    const items = useSelector(store=>store.items)
    const nav = [
        {text:'Home',id:0},
        {text:'Products',id:1},
        {text:'About',id:2},
        {text:'Contact',id:3}
    ]

    const navReturn=(text)=>{
        if(text==='Home'){
            return '/'
        }else if(text==='Products'){
            return '/'+text
        }else return '##'
    }
    return(
        <header>
            <div className="logoP">
                <img className="logo" src="imgs/logo/logo.png" alt="logo"/>
            </div>
            <nav className="nav1">
                {nav.map(e=><NavLink key={e.id} to={navReturn(e.text)}>{e.text}</NavLink>)}
            </nav>
            <nav className="nav2">
                <NavLink to="/Orders">
                    orders
                    <span>{items.length}</span>
                </NavLink>
            </nav>
        </header>
    )
}