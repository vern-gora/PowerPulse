// import PropTypes from 'prop-types';

import sprite from '../../images/svg/sprite.svg';
import css from './Daily.module.css';

const Daily = ({ color, iconId, text, value }) => {
  <div className={css.container} style={{ backgroundColor: `${color}` }}>
    <div className={css.wrapper}>
      <svg className={css.svg}>
        <use href={`${sprite}#${iconId}`}></use>
      </svg>
      <p className={css.text}>{text}</p>
    </div>
    <p className={css.value}>{value}</p>
  </div>;
};

// Daily.propTypes = {
//   color: PropTypes.string.isRequired,
//   iconId: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
// };

export default Daily;
