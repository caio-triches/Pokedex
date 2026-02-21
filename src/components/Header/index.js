import { Link, useLocation } from "react-router-dom";
import PokedexLogo from "./PokedexLogo.png"
import "./header.css"
import { useSearch } from "../../context/SearchContext";
import { Search } from 'lucide-react'

function Header(){
    const { busca, setBusca } = useSearch('')
    const location = useLocation();

    const esconderinput = ['/cardpoke']
    const mostrarinput = !esconderinput.some(rota => location.pathname.includes(rota));

    

    return(
        <header>
            <Link to="/">
                <img src={PokedexLogo} alt="Pokedex Logo"/>
            </Link>

            {mostrarinput && (
                <div className="search-container">
                    <Search size={18} className="search-icon" />
                    
                    <input placeholder="Pesquisar"  type="text" value={busca} onChange={(ev) => setBusca(ev.target.value)}/>
                    
                </div>
            )}
            
            <Link to="favpoke" className="fav">
                Meus Pokémons
            </Link>
        </header>
    )
}

export default Header;