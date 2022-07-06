import PropTypes from 'prop-types';

import css from './notification.module.css';

const Notification = ({ message }) => {
  return (
    <div>
      <p className={css.message}>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
