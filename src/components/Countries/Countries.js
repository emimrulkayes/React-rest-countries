import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

// Component 
const Countries = () => {
    // React Hook  useState
    const [countries, setCountries] = useState([]);

    // React Hook useEffect 
    useEffect( ()=> {
        // restCountries API 
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data => setCountries(data))

    }, [])

    return (
        <div>
            <h1> Available Countries: {countries.length} </h1>
            <div className="countries-container">
                {
                    countries.map(country => <Country 
                        country={country}
                        key={country.cca3}
                    ></Country>) 
                }
            </div>
        </div>
    );
};

export default Countries;