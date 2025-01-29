import React from "react";
import { Listings } from "../../components/listing/Listings";
import { useParams } from "react-router-dom";
import data from "../../resources/cats.json";
import './ListingPage.css';
const findCatById = (id) => {
    return data.cats.find(cat => cat.id === id);
};
export const ListingPage = () => {
    let { id } = useParams()
    const catfo = findCatById(id);
    return (
        <div>
            <div className="listing-page">
                <>
                   
                    <div key={catfo.id}>
                        <img src={catfo.image} alt={catfo.name} />
                        <div className="listing-info">
                            <p className="location">{catfo.cityState}</p>
                            <h1 className="name">{catfo.name}</h1>
                            <p className="owner">by {catfo.owner}</p>
                            <p className="age">{catfo.age} years old</p>
                            <p className="description">{catfo.description}</p>
                            <p className="breed">{catfo.species_breed}</p>
                        </div>
                    </div>
                    <button className="back-button" onClick={() => window.history.back()}>Back</button>
                </>
            </div>
        </div>
    )
}

    

