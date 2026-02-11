import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import Header from "./components/Header";
import CardPoke from "./pages/CardPoke";

function Routesapp(){
    return(
       <BrowserRouter>
       <Header/>
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/cardpoke/:id" element={ <CardPoke/> }/>
        </Routes>
       </BrowserRouter>
    )
}

export default Routesapp;