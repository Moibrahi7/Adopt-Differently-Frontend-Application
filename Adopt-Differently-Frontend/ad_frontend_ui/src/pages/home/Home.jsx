import React from "react";
import './Home.css'
import sound from '../../assets/audio.mp3';

let audio = new Audio(sound);

const start = () => {
    audio.play()
}
export const Home = () => {
    return (

        <div className="home">
                <div className="home-overlay">

            <div className="home-text">

                <h1 className="title">Welcome to Adopt Differently!</h1>
                    
                <div className="search-bar">
                    <input type="text" placeholder="Start Your Search Here!" className="searchHome" id='searcHome' onKeyDown={(e) => {if (e.key === 'Enter') 
                    {searchs(document.getElementById('searchHome'))}
                    } } />
                    <button className="search-btn" onClick={() =>{ 
                        searchs(document.getElementById('searchHome')
                        )}}>Search</button>
                </div>
            </div>
            </div>
        </div>
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