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

    if(loading){
        return(
            <div className="containerFav">
                <span>
                    Carregando...
                </span>
            </div>
        )
    }

    if(pokeFiltro.length === 0){
        if(pokefav.length === 0){
            return(
                <div className="containerFav">
                    <span>
                            Você não possui nenhum pokémon favoritado!
                    </span>
                </div>
                )
        }else{
            return(
                <div className="containerFav">
                    <span>
                        Não achamos nenhum pokemon!
                    </span>
                        
                  
                </div>
            )
        }
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
                                <li key={poke.id}>
                                    <div className="infoimg">
                                        <img className={`${poke.types[0].type.name}`} src={`${poke.sprites.other['official-artwork']?.front_default}`} alt={`${poke.name}`}/>
                                        <p>{poke.name.toUpperCase()[0] + poke.name.slice(1)}</p>
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