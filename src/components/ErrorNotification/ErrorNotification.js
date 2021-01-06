import PropTypes from 'prop-types';
import s from './ErrorNotification.module.css';

function Error({ message }) {
  return (
    <div role="alert" className={s.container}>
      <p text={message} className={s.message}>
        {message}
      </p>
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
