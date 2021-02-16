const API_KEY = '3a535f098bb1e32e2f1392111bce7bde'
const API_BASE = 'https://api.themoviedb.org/3'

/*
-trending
-top rated
-Action
-comedy
-romance
-old movies
*/

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`)
  const json = await req.json()
  return json
}

const getTitle = (param) => {
  switch (param) {
    case '28':
      return 'Action'
    case '12':
      return 'Adventure'
    case '16':
      return 'Animation'
    case '35':
      return 'Comedy'
    case '80':
      return 'Crime'
    case '18':
      return 'Drama'
    case '10751':
      return 'Family'
    case '27':
      return 'Horror'
    case '10749':
      return 'Romance'
    case '878':
      return 'Science Fiction'
    default:
      return ''
  }
}

const Tmdb = {
  getHomeList: async () => {
    return [
      {
        slug: 'trending',
        title: 'RECOMENDED',
        items: await basicFetch(
          `/trending/movie/week?page=1&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'toprated',
        title: 'Top rated',
        items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}`),
      },
      {
        slug: 'action',
        title: 'Action',
        items: await basicFetch(
          `/discover/movie?with_genres=28&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'comedy',
        title: 'Comedy',
        items: await basicFetch(
          `/discover/movie?with_genres=35&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'horror',
        title: 'Horror',
        items: await basicFetch(
          `/discover/movie?with_genres=27&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(
          `/discover/movie?with_genres=10749&api_key=${API_KEY}`
        ),
      },
    ]
  },

  getFilteredList: async (props) => {
    if (props.category) {
      return {
        title: getTitle(props.category),
        items: await basicFetch(
          `/discover/movie?with_genres=${props.category}&page=${props.page}&vote_count.gte=100&sort_by=${props.sortBy}&api_key=${API_KEY}`
        ),
      }
    }
  },

  getSearchList: async (props) => {
    return {
      title: `Results: ${props.query}`,
      items: await basicFetch(
        `/search/movie?&page=${props.page}&query=${props.query}&api_key=${API_KEY}`
      ),
    }
  },

  getMovie: async (props) => {
    return await basicFetch(`/movie/${props}?api_key=${API_KEY}`)
  },
}

export default Tmdb
