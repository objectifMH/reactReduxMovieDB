const initState = {
    films : localStorage.getItem('films') !== null ? JSON.parse(localStorage.getItem('films')) : [],
}

/* {]
    films: [
        {
            id: 181812,
            title: "Star Wars: The Rise of Skywalker",
            poster_path: "/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
            release_date: "2019-12-18"
        },
        {
            id: 475557,
            title: "Joker",
            poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
            release_date: "2019-10-02"
         },
         {
            id: 782,
            title: "Gattaca",
            poster_path: "/AuHbFy7d25NUgU9ane25nXeKeVK.jpg",
            release_date: "1997-09-07"
         },
         {
            id: 78200,
            title: "",
         },
         {
            id: 78223,
            title: "Gattaca",
            poster_path: "/AuHbFy7d25NUgU9ane25nXeKeVK.jpg",
            release_date: "1997-09-07"
         },
         {
            id: 78200000,
            title: "",
         }

    ]
} */



const setStorageFilm = (state) => {
    let stateStringify = JSON.stringify(state)
    localStorage.setItem('films', stateStringify);
}

const rootReducer = (state =  initState, action) => {


    if ( action.type === "SUPP_FILM_FAV") {
        console.log(action, "sup film");
        let newTab = state.films.filter( film => film.id !== action.film.id ) 
        
        setStorageFilm(newTab);
        return {
            ...state, films: newTab
        }
    }

    if ( action.type === "AJ_FILM_FAV") {
        console.log(action, "ajout film");
        setStorageFilm( [...state.films, action.film]);
        return {
            ...state, films: [...state.films, action.film]
        }
    }

    return state;
}

export default rootReducer;