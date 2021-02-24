const API_KEY = '95d949822fcd4a15f2dccd7ceb6ab11b';
const API_HOST_BASE = 'https://api.themoviedb.org/3';


const fetchData = async (endpoint) => {
    const req = await fetch(`${API_HOST_BASE}${endpoint}`)
    const json = await req.json();

    return json;
}

export const getHomeList = async () => {
        return [
            {
                slug: 'originals',
                title : "Originais do Netflix",
                items : await fetchData(`/discover/tv/?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title : "Recomendados para Você",
                items : await fetchData(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title : "Em Alta",
                items : await fetchData(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title : "Documentários",
                items : await fetchData(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title : "Romance",
                items : await fetchData(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },  
            {
                slug: 'action',
                title : "Ação",
                items : await fetchData(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title : "Comédia",
                items : await fetchData(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title : "Terror",
                items : await fetchData(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },  
                    
        ]
}
export const  getMovieInfo = async (movieId, type) => {
    let info = {};
    
    if(movieId) {
        switch(type){
            case 'movei':
                info = await fetchData(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
            break;
             case 'tv':
                info = await fetchData(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
            break;
            default:
                info = null;
            break;
        }
    }

     return info;
 }

