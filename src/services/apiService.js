import axios from 'axios';

const API_KEYS = {
  newsApi: '6ead5e97bd224f909b7121277333ac1a',
  guardian: '5e9bfd00-0b3d-471c-a32e-abdda59f59a1',
  nyt: 'Gq1oittbJeQYt2PGWm4fFGcpAnDamloJ',
};

const getNewsAPIArticles = (query, page) => axios.get(`https://newsapi.org/v2/everything?q=${query}&page=${page}&pageSize=10&apiKey=${API_KEYS.newsApi}`);
const getGuardianArticles = (query, page) => axios.get(`https://content.guardianapis.com/search?q=${query}&page=${page}&show-elements=image&show-fields=trailText&api-key=${API_KEYS.guardian}`);
const getNYTArticles = (query, page) => axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&page=${page}&api-key=${API_KEYS.nyt}`);

export { getNewsAPIArticles, getGuardianArticles, getNYTArticles };