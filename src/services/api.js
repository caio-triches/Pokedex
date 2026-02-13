// URL DA API: https://pokeapi.co/api/v2/pokemon?limit=100

const endPoints = []
    for(let i=1; i<=700; i++){
    endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }

export default endPoints;