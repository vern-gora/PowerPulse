import css from './DayProducts.module.css';
import { Link } from 'react-router-dom';
import { DayProductItem } from './DayProductItem';
//import { useDispatch } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/diary/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
//import { useEffect, useState } from 'react';
import { Rings } from 'react-loader-spinner';
//import { fetchFoodAndExercises } from 'redux/diary/operations';
import svg from '../../images/svg/sprite.svg';
export const DayProducts = ({ productsData }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div className={css.productsContainer}>
      {isLoading ? (
        <Rings
          height="100"
          width="100"
          color="#e6533c"
          ariaLabel="rings-loading"
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
          }}
          wrapperClass=""
          visible={true}
          firstLineColor=""
          middleLineColor=""
          lastLineColor=""
        />
      ) : error ? (
        <p className={css.errorMessage}>Error</p>
      ) : (
        <>
          <div className={css.productsTopBar}>
            <p className={css.productsTitle}>Products</p>
            <Link to="/products" className={css.Link}>
              Add product
              <svg width="16px" height="16px">
                <use href={svg + '#icon-arrow-right'}></use>
              </svg>
            </Link>
          </div>
          {!productsData ||
            (productsData.length === 0 && (
              <p className={css.noProductsText}>Not found products</p>
            ))}

          {productsData ||
            (productsData.length !== 0 && (
              <div className={css.productsBottomBar}>
                <ul className={css.adaptiveTitlesList}>
                  <li className={css.adaptiveTitle}>Title</li>
                  <li className={css.adaptiveTitle}>Category</li>
                  <li className={css.adaptiveTitle}>Calories</li>
                  <li className={css.adaptiveTitle}>Weight</li>
                  <li className={css.adaptiveTitle}>Recommend</li>
                </ul>
                <ul className={css.productsList}>
                  {productsData.map((item, index) => {
                    return <DayProductItem data={item} key={index} />;
                  })}
                </ul>
              </div>
            ))}
        </>
      )}
    </div>
  );
};
