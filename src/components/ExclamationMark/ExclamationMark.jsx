import sprite from '../../images/svg/sprite.svg';
import css from './ExclamationMark.module.css';

const ExclamationMark = () => {
  return (
    <div className={css.wrappers}>
      <div className={css.wrapper}>
        <div className={css.wrapper_mark}>
          <svg width="24" height="24">
            <use href={`${sprite}#exclamation_mark_icon`}></use>
          </svg>
        </div>

        <p className={css.text}>
          We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.
        </p>
      </div>
    </div>
  );
};

export default ExclamationMark;
