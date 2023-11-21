import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import sprite from '../../images/svg/sprite.svg';
import style from './ProductsItem.module.css';
import productsSelectors from 'redux/products/selectors';
import { selectUser } from 'redux/auth/selectors';

const ProductsItem = ({
  onOpenModal,
  filterByRecommended,
  filterByBloodType,
}) => {
  const products = useSelector(productsSelectors.getProducts);

  const currentUser = useSelector(selectUser);
  const userBloodType = currentUser.blood;

  const onFilterProducts = () => {
    if (products.length === 0) {
      return products;
    }

    if (filterByBloodType && filterByRecommended) {
      return products.filter(
        ({ groupBloodNotAllowed }) => groupBloodNotAllowed[userBloodType]
      );
    } else if (filterByBloodType && !filterByRecommended) {
      return products.filter(
        ({ groupBloodNotAllowed }) => !groupBloodNotAllowed[userBloodType]
      );
    } else {
      return products;
    }
  };

  return onFilterProducts().length === 0 ? (
    <div className={style.warning}>
      <p className={style.notFoundText}>
        <span className={style.highlightedText}>
          Sorry, no results were found
        </span>{' '}
        for the product filters you selected. You may want to consider other
        search options to find the product you want. Our range is wide and you
        have the opportunity to find more options that suit your needs.
      </p>
      <p className={style.highlightedText}>
        Try changing the search parameters.
      </p>
    </div>
  ) : (
    onFilterProducts().map(
      ({ category, calories, title, weight, _id, groupBloodNotAllowed }) => {
        return (
          <li key={_id} data-id={_id} className={style.productItem}>
            <div className={style.cardContainer}>
              <div className={style.cardHeadContainer}>
                <div className={style.cardCategoryName}>Diet</div>
                <div className={style.recommendWrapper}>
                  <span
                    className={
                      groupBloodNotAllowed[userBloodType]
                        ? style.labelRecommend
                        : style.labelNotRecommended
                    }
                  ></span>
                  <p className={style.recommendText}>
                    {groupBloodNotAllowed[userBloodType]
                      ? 'Recommended'
                      : 'Not recommended'}
                  </p>
                </div>
                <button
                  type="button"
                  className={style.addProductBtn}
                  onClick={onOpenModal}
                >
                  Add
                  <svg className={style.addBtnIcon} width="16" height="16">
                    <use href={sprite + '#arrow_add_icon'}></use>
                  </svg>
                </button>
              </div>
              <div className={style.cardHeaderWrapper}>
                <svg className={style.cardRunningIcon} width="24" height="24">
                  <use href={sprite + '#running_stick_figure_icon'}></use>
                </svg>
                <h3 className={style.singleCardTitle}>{title}</h3>
              </div>
              <div className={style.cardProductStats}>
                <p className={style.cardProdStatItem}>
                  <span className={style.cardProdStatItemText}>Calories:</span>{' '}
                  {calories}
                </p>
                <p className={style.cardProdStatItem}>
                  <span className={style.cardProdStatItemText}>Category: </span>
                  {category}
                </p>
                <p className={style.cardProdStatItem}>
                  <span className={style.cardProdStatItemText}>Weight:</span>{' '}
                  {weight}
                </p>
              </div>
            </div>
          </li>
        );
      }
    )
  );
};

export default ProductsItem;

ProductsItem.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
  filterByRecommended: PropTypes.bool.isRequired,
  filterByBloodType: PropTypes.bool.isRequired,
};
