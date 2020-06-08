const base = process.NODE_ENV === 'production'
  ? 'https://api.itv.uz/api/content/main/2'
  : '';

const key = process.env.REACT_APP_API_KEY;

const getMoviesListURL = page => `${base}/list?page=${page}&user=${key}`;
const getMovieOverviewURL = id => `${base}/show/${id}?user=${key}`;

export class MoviesAPI {
  static async fetchMoviesList(page) {
    const response = await fetch(getMoviesListURL(page));
    const { data } = await response.json();

    const transformedList = data.movies.map(movie => ({
      id: movie.id,
      title: movie.title,
      year: movie.year,
      poster: movie.files.poster_url,
      isHD: movie.params.is_hd
    }));

    return {
      maxPerPage: data.items_per_page,
      collectionSize: data.total_items,
      moviesList: transformedList
    };
  }

  static async fetchMovieOverview(id) {
    const response = await fetch(getMovieOverviewURL(id))
    const { data: { movie } } = await response.json();

    return {
      id: movie.id,
      title: movie.title,
      year: movie.year,
      genres: movie.genres_str,
      description: movie.description,
      countries: movie.countries_str,
      poster: movie.files.poster_url,
      snapshots: movie.files.snapshots,
      actors: movie.actors.map(({ name }) => name),
      directors: movie.directors.map(({ name }) => name),
      isHD: movie.params.is_hd
    };
  }
}