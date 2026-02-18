import { createContext, useState, useContext } from "react";

export const SearchContext = createContext();

export function SearchProvide({ children }){
    const [busca, setBusca] = useState('')

    return(
        <SearchContext.Provider value={{ busca, setBusca }}>
            {children}
        </SearchContext.Provider>
    )
}

export function useSearch(){
    return useContext(SearchContext)
}