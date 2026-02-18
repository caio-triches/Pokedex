import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./cardpoke.css"


function CardPoke(){
    const { id } = useParams();
    const [pokeinfo, setPokeinfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getPokemon() {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            setPokeinfo(response.data)
            setLoading(false)
        }

        if(id){
            getPokemon();
        }

    },[id]);


    function salvarPoke(){
        const minhaLista = localStorage.getItem("@Poke");

        let pokesalvos = JSON.parse(minhaLista) || [];
        
        const verifc = pokesalvos.some( (pokesalvo) => pokesalvo.id === pokeinfo.id)

        if(verifc){
            toast.warn("Esse Pokémon já foi salvo!")
            return;
        }

        pokesalvos.push(pokeinfo)    
        localStorage.setItem("@Poke", JSON.stringify(pokesalvos))
        toast.success("Pokémon salvo com sucesso!")
    }

    if(loading){
        return(
            <div className="containerinfo">
                <span>
                    Carregando...
                </span>
            </div>
        )
    }

    return(
        <div className={`containerinfo ${pokeinfo.types[0].type.name}`}>
            <h1 key={pokeinfo.id}>
                    {pokeinfo.name[0].toUpperCase() + pokeinfo.name.slice(1)}
            </h1>
            
            <div className="allwithoutname">
                <div className="cardImg">
                    <img src={pokeinfo.sprites.other['official-artwork']?.front_default} alt={pokeinfo.data?.id}/>
                
                    <button onClick={salvarPoke}>
                        Adicionar aos favoritos
                    </button>
                </div>

                    
            
                <div className="info">
                
                <div>
                    <span>Largura: {pokeinfo.weight}</span>
                    <span>Altura: {pokeinfo.height}</span>
                </div>

                    <ul>
                        {pokeinfo.stats.map((item) => {
                            return(
                                <li key={item.stat.name}>
                                    <div>
                                        <span>{item.stat.name[0].toUpperCase() + item.stat.name.slice(1)}</span>
                                        <span>{item.base_stat}</span>
                                    </div>
                                    <div>
                                        <div style={{ width: `${(item.base_stat / 255) * 100}%` }} />
                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                    <ul>
                        {pokeinfo.abilities.map((item) => {
                            return(
                                <li key={item.ability.name}>
                                    {item.ability.name[0].toUpperCase() + item.ability.name.slice(1)}
                                </li>   
                            )
                        })}
                    </ul>



                </div>
            </div>
        </div>
    )
}  

export default CardPoke;