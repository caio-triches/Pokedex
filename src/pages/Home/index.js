import axios from "axios";
import { useEffect, useState } from "react";
import "./home.css"
import endPoints from "../../services/api";

// Info pokemon: https://pokeapi.co/api/v2/pokemon/1/

function Home(){
    const [infopoke, setInfopoke] = useState([])
    
    useEffect(() => {
        getInfoPokemons();
    }, [])

    const getInfoPokemons = () => {
            axios.all(endPoints.map(item => axios.get(item)))
            .then(res => setInfopoke(res))

    }

    return(
        <div className="container">
            <div className="cardPokemon">
                {/* <input placeholder="Pesquisar">
                </input> */}
                {infopoke.map(item => {
                    return(
                        <article key={item.data.id}>
                            {item.data.id >= 100 ? <strong>#{item.data.id}</strong> : item.data.id >= 10 ? <strong>#{item.data.id}</strong> : <strong>#00{item.data.id}</strong>}
                            <h3>{item.data.name[0].toUpperCase() + item.data.name.slice(1)}</h3>

                            <img src={`${item.data.sprites.other["official-artwork"].front_default}`} alt={item.data.name}/>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;