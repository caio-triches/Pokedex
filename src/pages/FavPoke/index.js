import { useEffect, useState, useMemo} from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import './favpoke.css'
import { useSearch } from "../../context/SearchContext";



function FavPoke(){
    const { busca } = useSearch()
    const [pokefav, setPokefav] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const pokelista = localStorage.getItem("@Poke")
        setPokefav(JSON.parse(pokelista) || [])
        setLoading(false)
        
    }, [])

    const pokeFiltro = useMemo(() => {
        const lowerpoke = busca.toLowerCase()
        return pokefav.filter((poke) => poke.name.toLowerCase().includes(lowerpoke));
    }, [busca, pokefav])

    function excluirFav(id){
        let pokelist = pokefav.filter((item) => {
            return (item.id !== id)
        })

        
        setPokefav(pokelist)
        localStorage.setItem("@Poke", JSON.stringify(pokelist))
        toast.success("Pokémon excluido com sucesso!")


    }

    if(pokeFiltro.length === 0){
        return(
            <div className="contianerFav">
                <p>
                Você não possui nenhum pokémon!
                </p>
                    
              
            </div>
        )
    }

    if(loading){
        return(
            <div className="contianerFav">
                <span>
                    Carregando...
                </span>
            </div>
        )
    }

    return(
        <div className="containerFav">
            <h1>
                Minha lista 
            </h1>

            <div className="poke">
                <ul>
                    {pokeFiltro.map((poke) => {
                        return(
                            
                            <li>
                                <div className="infoimg">
                                    <img className={`${poke.types[0].type.name}`} src={`${poke.sprites.other['official-artwork']?.front_default}`} alt={`${poke.name}`}/>
                                    <span>{poke.name.toUpperCase()[0] + poke.name.slice(1)}</span>
                                </div>

                                <div className="infofav">
                                    
                                    <Link to={`/cardpoke/${poke.id}`}>
                                        Ver detalhes
                                    </Link>
                                    <button onClick={() => excluirFav(poke.id)}>
                                        Excluir
                                    </button>
                            </div>
                            </li>
                        )
                    })}
                </ul>
            
            </div>
        </div>
    )
}

export default FavPoke;