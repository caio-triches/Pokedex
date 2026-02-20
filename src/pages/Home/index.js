import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { useSearch } from "../../context/SearchContext";
import "./home.css"
import endPoints from "../../services/api";
import { Link } from "react-router-dom";


// Info pokemon: https://pokeapi.co/api/v2/pokemon/1/

function Home(){
    const { busca } = useSearch();
    const [infopoke, setInfopoke] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getInfoPokemons();
    }, [])

    const pokeFiltro = useMemo(() => {
        const lowerpoke = busca.toLowerCase()
        return infopoke.filter((poke) => poke.data.name.toLowerCase().includes(lowerpoke));
    }, [busca, infopoke])


    const getInfoPokemons = async () => {
            const resposta = await axios.all(endPoints.map(item => axios.get(item)))
            setInfopoke(resposta)
            setLoading(false)
    }

    if(loading){
        return(
        <div className="container">
            <span>
                Carregando...
            </span>
        </div>
        ) 
    }

    if(pokeFiltro.length === 0){
        return(
            <div className="container">
                <span>
                    Nenhum pokémon encontrado!
                </span>
            </div>
        )
    }

    return(
        <div className="container">
            <div className={`cardPokemon`}>
                {
                pokeFiltro.map(item => {
                    return(
                        <Link to={`/cardpoke/${item.data.id}`}>
                        <article key={item.data.id} className={`${item.data.types[0].type.name}`}>
                            {item.data.id >= 100 ? <strong>#{item.data.id}</strong> : item.data.id >= 10 ? <strong>#0{item.data.id}</strong> : <strong>#00{item.data.id}</strong>}
                            <h3>{item.data.name[0].toUpperCase() + item.data.name.slice(1)}</h3>

                            <img src={`${item.data.sprites.other["official-artwork"].front_default}`} alt={item.data.name}/>
                            
                        </article>
                        </Link> 
                    )
                })
            }
            </div>
        </div>
    )
}

export default Home;