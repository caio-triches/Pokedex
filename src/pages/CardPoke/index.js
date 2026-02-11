import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function CardPoke(){
    const { id } = useParams();
    const [pokeinfo, setPokeinfo] = useState([]);

    useEffect(() => {
        async function getPokemon() {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokeinfo(res))
            console.log(pokeinfo)
        }

        getPokemon();
    },[id]);

    return(
        <div className="container">
            <div className="cardimg">
                <img src={`${pokeinfo.data.sprites.other["official-artwork"].front_default}`} alt={pokeinfo.data.id}/>
                
            </div>

            <div>
                <h3>
                    {pokeinfo.data.name}
                </h3>
                
            </div>
        </div>
    )
}  

export default CardPoke;