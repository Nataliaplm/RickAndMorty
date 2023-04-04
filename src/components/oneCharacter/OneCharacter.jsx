import React, { useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import '../oneCharacter/OneCharacter.css'

function OneCharacter() {

    const param = useParams()
    const [character, setCharacter] = useState([])

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${param.id}`)
        .then((res)=>res.json())
        .then((data)=>setCharacter(data))
},[param.id])

    return (
        <div id='characterContainer'>
        <div className='characterContainer' key={character.id}>
            <h1>{character.name}</h1>
            <img className='characterImg' src={character.image} alt={character.name}/>
            <h3>Especie: {character.species}</h3>
            <h3>Gender: {character.gender}</h3>
            <h3>Status: {character.status}</h3>
            <Link to='/'><button className="oneButton">Back</button></Link>
        </div>


        </div>
  )
}

export default OneCharacter