import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios"
import Character from './components/Character'

const App = () => {
  const [ data , setData ] = useState([])
    useEffect(() => {
      axios.get(`https://swapi.dev/api/people/`)
      .then(response => {
        console.log('get' , response.data.results)
        setData(response.data.results)
      })
      .catch(error => {
        console.log(error)
       })
    }, [] )
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="name">
      {data.map( (person ) => {
        return ( 
        <Character
        key = {person.name}
        name = {person.name} 
        year = {person.birth_year}
        films = {person.films.length}
        ships = {person.starships} />
        )
      })}
      </div>
    </div>
  );
}

export default App;
