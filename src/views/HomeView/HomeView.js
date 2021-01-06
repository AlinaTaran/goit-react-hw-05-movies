import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Pagination } from '@material-ui/lab';

import { getTrendingMovies } from '../../services/moviesApi';
import Status from '../../services/Status';

import MoviesList from '../../components/MoviesList';
import Loader from '../../components/Loader';
import ErrorNotification from '../../components/ErrorNotification';
import s from './HomeView.module.css';

function HomeView() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.PENDING);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const history = useHistory();
  const location = useLocation();

  const page = new URLSearchParams(location.search).get('page') ?? 1;

  useEffect(() => {
    setStatus(Status.PENDING);
    const fetchMovies = async () => {
      try {
        const { results, total_pages } = await getTrendingMovies(page);
        setMovies(results);
        setTotalPages(total_pages);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(Status.REJECTED);
      }
    };
    fetchMovies();
  }, [page]);

  const pageHandler = (event, page) => {
    history.push({ ...location, search: `page=${page}` });
  };

  return (
    <>
      <h2 className={s.title}>Trending today</h2>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && error && (
        <>
          <ErrorNotification message={error} />
          <p>Something went wrong</p>
        </>
      )}
      {status === Status.RESOLVED && (
        <>
          <MoviesList movies={movies} url={'movies'} />
          {totalPages > 1 && (
            <div className={s.wrapper}>
              <Pagination
                count={totalPages}
                onChange={pageHandler}
                page={Number(page)}
                showFirstButton
                showLastButton
                color={'secondary'}
                size={'large'}
              />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default HomeView;
