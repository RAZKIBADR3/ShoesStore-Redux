import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'

export default function Header(){
    const items = useSelector(store=>store.items)
    const nav = [
        {id:0,text:'Home',link:'/ShoesStore-Redux/'},
        {id:1,text:'Products',link:'/ShoesStore-Redux/Products'},
        {id:2,text:'About',link:'##'},
        {id:3,text:'Contact',link:'##'}
    ]

    return(
        <header>
            <div className="logoP">
                <img className="logo" src="imgs/logo/logo.png" alt="logo"/>
            </div>
            <nav className="nav1">
                {nav.map(e=><NavLink key={e.id} to={e.link}>{e.text}</NavLink>)}
            </nav>
            <nav className="nav2">
                <NavLink to="/ShoesStore-Redux/Orders">
                    orders
                    <span>{items.length}</span>
                </NavLink>
            </nav>
        </header>
    )
}