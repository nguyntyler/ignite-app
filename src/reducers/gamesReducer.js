const initState = {
    popular :[],
    newGames : [],
    upcoming : []
}
// These states are what is shown in redux's states. If we have more, we just create new files similar to this and add it to index.js

const gamesReducer = (state=initState, action) => {
    switch(action.type){
        case 'FETCH_GAMES': 
            return {...state}
        default:
            return {...state}
    }
}

export default gamesReducer