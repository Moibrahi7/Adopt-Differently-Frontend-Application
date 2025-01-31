import React, { useState } from 'react';
import "./Header.css";
import logo from '../../assets/FullAdoptDifferentlyLogo.png';
import {NavLink} from 'react-router-dom';
import sound from '../../assets/audio.mp3';
import { auth } from '../../firebase/fireBaseConfig';

let audio = new Audio(sound);

const start = () => {
    audio.play()
}

export const Header = () => {
   

    return (
        <header className="header">
            <div className="logoWrapper">
                <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} href="/" to="/">
                    <img src={logo} alt="Adopt Differently Logo" className="logo"/>
                </NavLink>
            </div>
            <nav id= "nav-tabs">
            <ul className="header-top-menu">
                <li>
                    <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to="/adopt">Adopt</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to="/help">Help</NavLink>
                </li>
            </ul>
            </nav>
             <div className="header-left">
                <input type="text" placeholder="Start Your Search Here!" className="search" id='search' onKeyDown={(e) => {if (e.key === 'Enter') 
                {searchs(document.getElementById('search'))}
                } } />
                <button className="search-btn" onClick={() =>{ 
                    searchs(document.getElementById('search')
                    )}}>Search</button>
            </div>
            <div className="header-top-right">
                {/* <div className="signin">
                    <li>
                        <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to="/login">Sign In</NavLink>
                    </li>
                </div> */}
                <div className="user">
                    {loggedIn()}
                </div>
            </div>
            
        </header>
    )
}

function searchs (input) {

    if (input.value === "") {
        alert("Please enter something to search!")
    }
    else if (input.value === "2 of Us") {
        start()
    }
    else if (input.value === "Rick") {
        location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
    else {
    }
}

function loggedIn() {
    if (auth.currentUser) {
        return (
            <div className="user">
                <li>
                    <p>{auth.currentUser.email}</p>
                </li>
            </div>
        )
    }
    else {
        return (
            <div className="signin">
                <li>
                    <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to="/login">Sign In</NavLink>
                </li>
            </div>
        )
    }
}