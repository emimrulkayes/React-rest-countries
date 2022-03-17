import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flags, languages, population, area } = props.country; // destructuring countries
    // console.log(props.country)
    return (
        <div className='country'>
           <img src={flags.png} alt="" />
           <h2>Country Name: {name.common} </h2>
           {/* <p>Language: {languages.fra} </p> */}
           <p>Population: {population} </p>
           <p> Area: {area} </p>

        </div>
    );
};

export default Country;