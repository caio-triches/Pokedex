import { useEffect, useState } from "react";


function FavPoke(){
    const [pokefav, setPokefav] = useState([])

    useEffect(() => {

        const pokelista = localStorage.getItem("@Poke")
        setPokefav(JSON.parse(pokelista))
        
    }, [])

    return(
        <div>
            <h1>
                Minha lista 
            </h1>

            <ul>
                {pokefav.map((poke) => {
                    console.log(pokefav)
                    return(
                        <li>
                            <img src={`${pokefav.sprites.other['official-artwork']?.front_default}`}/>
                            <span>{poke.name}</span>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FavPoke;