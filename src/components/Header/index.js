import { Link } from "react-router-dom";
import PokedexLogo from "./PokedexLogo.png"
import "./header.css"

function Header(){
    return(
        <header>
            <Link to="/">
                <img src={PokedexLogo} alt="Pokedex Logo"/>
            </Link>
            
            <Link to="favpoke">
                Meus Pokémons
            </Link>
        </header>
    )
}

export default Header;