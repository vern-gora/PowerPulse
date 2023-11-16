import React, { useEffect } from 'react';
import css from './DayProducts.module.css';
import { Link } from 'react-router-dom';
import { DayProductItem } from './DayProductItem';
//import axios from "axios"
import { fetchFood } from 'redux/diary/operations';
import svg from '../../images/svg/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectConsumedFood } from 'redux/diary/selectors';
import { date } from 'yup';

function DayProducts() {
  const dispatch = useDispatch();
  const date = '17/11/2023';
  dispatch(fetchFood(date));

  const productsData = useSelector(state => state.diary.data.consumedProduct);
  const exerciseData = useSelector(state => state.diary.data.exerciseDone);

  console.log('data:', productsData);

  return (
    <div className={css.productsContainer}>
      <div className={css.productsTopBar}>
        <p className={css.productsTitle}>Products</p>
        <Link to="/products" className={css.Link}>
          Add product
          <svg width="16px" height="16px">
            <use href={svg + '#icon-arrow-right'}></use>
          </svg>
        </Link>
      </div>
      <div className={css.productsBottomBar}>
        {!productsData && (
          <p className={css.noProductsText}>Not found products</p>
        )}
        <ul className={css.adaptiveTitlesList}>
          <li className={css.adaptiveTitle}>Title</li>
          <li className={css.adaptiveTitle}>Category</li>
          <li className={css.adaptiveTitle}>Calories</li>
          <li className={css.adaptiveTitle}>Weight</li>
          <li className={css.adaptiveTitle}>Recommend</li>
        </ul>
        <ul className={css.productsList}>
          {productsData.map(item => {
            return <DayProductItem data={item} key={item.title} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default DayProducts;
