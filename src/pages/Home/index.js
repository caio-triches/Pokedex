import axios from "axios";
import { use, useEffect, useState } from "react";
import "./home.css"
import endPoints from "../../services/api";
import { Link } from "react-router-dom";

// Info pokemon: https://pokeapi.co/api/v2/pokemon/1/

function Home(){
    const [infopoke, setInfopoke] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getInfoPokemons();
    }, [])

    const getInfoPokemons = () => {
            axios.all(endPoints.map(item => axios.get(item)))
            .then(res => setInfopoke(res))
            setLoading(false)
    }

    if(loading){
        return(
        <div>
            <span>
                Carregando...
            </span>
        </div>
        ) 
    }

    return(
        <div className="container">
            <div className={`cardPokemon`}>
                {/* <input placeholder="Pesquisar">
                </input> */}
                {infopoke.map(item => {
                    return(
                        <Link to={`/cardpoke/${item.data.id}`}>
                        <article key={item.data.id} className={`${item.data.types[0].type.name}`}>
                            {item.data.id >= 100 ? <strong>#{item.data.id}</strong> : item.data.id >= 10 ? <strong>#0{item.data.id}</strong> : <strong>#00{item.data.id}</strong>}
                            <h3>{item.data.name[0].toUpperCase() + item.data.name.slice(1)}</h3>

                            <img src={`${item.data.sprites.other["official-artwork"].front_default}`} alt={item.data.name}/>
                            
                        </article>
                        </Link> 
                    )
                })}
            </div>
        </div>
    )
}

export default Home;