import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import Header from "./components/Header"
import Cardpoke from './pages/CardPoke'
import FavPoke from "./pages/FavPoke";


function Routesapp(){
    return(
       <BrowserRouter>
       <Header/>
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/cardpoke/:id" element={ <Cardpoke/> }/>
            <Route path="favpoke" element={<FavPoke/>}/>
        </Routes>
       </BrowserRouter>
    )
}

export default Routesapp;