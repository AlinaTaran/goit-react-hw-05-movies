import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import noCover from '../../images/no-cover.png';
import s from './MoviesListItem.module.css';

const MoviesListItem = ({ poster, title, id, url }) => (
  <li className={s.item}>
    <Link to={{ pathname: `${url}/${id}` }}>
      <img
        src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : noCover}
        alt={title}
        className={s.poster}
      />
      <h2 className={s.title}>{title}</h2>
    </Link>
  </li>
);

MoviesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  poster: PropTypes.string,
};

export default MoviesListItem;
