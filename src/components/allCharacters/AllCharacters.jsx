import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../allCharacters/AllCharacters.css'

function AllCharacters() {

    const [ characters, setCharacters ] = useState ([])

    //Esto es un método que dentro tiene una función
    useEffect (()=>{
        fetch("https://rickandmortyapi.com/api/character")
        .then((res)=>res.json())
        .then((data)=>setCharacters(data.results))

    },[]) //Esta apertura y cierre de corchete es para que no esté actualizándose todo el rato

    return (
        <div>

        {characters.map((character)=>{
            return(
                <Link to={`/character/${character.id}`} key={character.id}>
                    <img className='characterImg' src={character.image} alt={character.name}/>
                    <p>{character.name}</p>
                </Link>

            )
        })}
        

        </div>

    
    )
}

export default AllCharacters