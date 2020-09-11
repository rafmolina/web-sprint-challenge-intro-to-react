// Write your Character component here
import React from "react"

const Character = (props) => {
    console.log('look' , props)

    const movies = props.films;
    const listItems = movies.map((movie) =>
    <li key={movie.toString()}>
        {movies}</li>
  );



    return (
        <div className="top">
            <h2>{props.name}{props.birth_year}</h2>
            <div className="bottom">
                <ul>{listItems}</ul>
                <p>Starships{props.starships}</p>
                <p>Vehicles</p>
            </div>
        </div>
    )
};

export default Character;