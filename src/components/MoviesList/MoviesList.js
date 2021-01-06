import PropTypes from 'prop-types';
import MoviesListItem from '../MoviesListItem/MoviesListItem';

import s from './MoviesList.module.css';

const MoviesList = ({ movies, url }) => {
  return (
    <ul className={s.list}>
      {movies.map(({ poster_path, title, id }) => (
        <MoviesListItem
          key={id}
          title={title}
          poster={poster_path}
          url={url}
          id={id}
        />
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
