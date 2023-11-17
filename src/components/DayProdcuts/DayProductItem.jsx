import css from './DayProducts.module.css';
import svg from '../../images/svg/sprite.svg';
import { deleteFood } from 'redux/diary/operations';
import { useDispatch } from 'react-redux';
export const DayProductItem = ({ data }) => {
  const {title,category,calories,amount,recommend, _id} = data;
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteFood(_id));

  return (
    <li className={css.productListItem}>
      <div className={css.productListLarge}>
        <p> Title </p>
        <span className={css.productData}>{title}</span>
      </div>
      <div className={css.productListLarge}>
        <p>Category</p>
        <span className={css.productData}>{category}</span>
      </div>
      <div className={css.productListSmallProperties}>
        <div className={css.productListSmall}>
          <p> Calories </p>
          <span className={css.productData}>{calories}</span>
        </div>
        <div className={css.productListSmall}>
          <p> Weight </p>
          <span className={css.productData}>{amount}</span>
        </div>
        <div className={css.productListSmall}>
          <p>Recommend</p>
          <span className={css.productData}>
            <div
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: recommend ? '#419B09' : '#E9101D',
              }}
            ></div>
            {recommend ? 'Yes' : 'No'}
          </span>
        </div>
        <button type="button" className={css.deleteProductButton} onClick={handleDelete}>
          <svg className={css.deleteProductButtonIcon}>
            <use href={svg + '#trash_icon'}></use>
          </svg>
        </button>
      </div>
    </li>
  );
};
