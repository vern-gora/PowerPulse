import css from './DayProducts.module.css';
import { Link } from 'react-router-dom';
import { DayProductItem } from './DayProductItem';
import { selectConsumedFood } from 'redux/diary/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { fetchFoodNameById } from 'redux/diary/operations'; 
//import axios from "axios"
//import { fetchFood } from 'redux/diary/operations';
import svg from '../../images/svg/sprite.svg';
export const DayProducts = () => {
  /*const exampleData = [
    {
      _id: '650f35ece3f5522fc6396289',
      title: 'Bread Hercules grain',
      category: 'Flour',
      calories: '289',
      weight: '100',
      recommend: true,
    },
    {
      _id: '650f35ece3f5522fc6396299',
      title: 'Rice Semolina',
      category: 'Cereals',
      calories: '340',
      weight: '200',
      recommend: false,
    },
  ];*/
const data = useSelector(selectConsumedFood)
console.log(data);
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
        {!data && (
          <p className={css.noProductsText}>Not found products</p>
        )}
       {data &&
       <>
        <ul className={css.adaptiveTitlesList}>
          <li className={css.adaptiveTitle}>Title</li>
          <li className={css.adaptiveTitle}>Category</li>
          <li className={css.adaptiveTitle}>Calories</li>
          <li className={css.adaptiveTitle}>Weight</li>
          <li className={css.adaptiveTitle}>Recommend</li>
        </ul>
        <ul className={css.productsList}>
          {data.map(item => {
            return <DayProductItem data={item} key={item.title} />;
          })}
        </ul>
       </>}
      </div>
    </div>
  );
};
