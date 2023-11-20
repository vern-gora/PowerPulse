import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './AddProductSuccess.module.css';
import image from 'images/avocado.png';
import sprite from '../../images/svg/sprite.svg';

const AddProductSuccess = ({
  onCloseModal,
  consumedCalories,
  handleBackdropClick,
}) => {
  return (
    <div className={style.overlay} onClick={handleBackdropClick}>
      <div className={style.successWrap}>
        <button
          type="button"
          className={style.closeBasicModal}
          onClick={onCloseModal}
        >
          <svg className={style.closeBasicModalIcon} width="22" height="22">
            <use href={sprite + '#close_icon'}></use>
          </svg>
        </button>
        <div className={style.successData}>
          <img src={image} alt="Success" className={style.successImg} />
          <p className={style.wellDone}>Well done</p>
          <p className={style.kcal}>
            Calories:{' '}
            <span className={style.kcalNumber}>{consumedCalories}</span>
          </p>
          <button
            type="button"
            className={style.nextBtn}
            onClick={onCloseModal}
          >
            Next product
          </button>
          <div className={style.linkWrapper}>
            <Link to="/diary" className={style.link}>
              To the diary{' '}
            </Link>
            <svg width="16" height="16">
              <use
                href={sprite + '#arrow_add_icon'}
                className={style.linkArrow}
              ></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductSuccess;

AddProductSuccess.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  consumedCalories: PropTypes.func.isRequired,
  handleBackdropClick: PropTypes.func.isRequired,
};
