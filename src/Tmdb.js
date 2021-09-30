import axios from 'axios';
const API_KEY = '2eabc78d837c127ef746b130b69eb798';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
  const response = await axios.get(`${API_BASE}${endpoint}`);
  return response.data;
};

const HomeList = {
  getHomeList: async () => {
    return [
      {
        slug: 'orginals',
        title: 'Originais Netflix',
        items: await basicFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'trending',
        title: 'Recomendados para voce',
        items: await basicFetch(
          `/trending/all/week?&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await basicFetch(
          `/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(
          `/discover/tv?with_genres=28&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'comedia',
        title: 'Comédia',
        items: await basicFetch(
          `/discover/tv?with_genres=35&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(
          `/discover/tv?with_network=27&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(
          `/discover/tv?with_genres=10749&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'documentary',
        title: 'Documentário',
        items: await basicFetch(
          `/discover/tv?with_genres=99&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};
    if (movieId) {
      switch (type) {
        case 'movie':
          info = await basicFetch(
            `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`,
          );
          return info;
        case 'tv':
          info = await basicFetch(
            `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`,
          );
          return info;
        default:
          info = null;
          break;
      }
    }
  },
};

export default HomeList;
