import css from './DayProducts.module.css';
import svg from '../../images/svg/sprite.svg';
export const DayProductItem = ({ data, itemName }) => {
    const { category, calories, amount, recommend } = data;
    return (
      <li className={css.productListItem}>
        <div className={css.productListLarge}>
         <p> Title </p>
          <span>{itemName}</span>
        </div>
        <div className={css.productListLarge}>
        <p>Category</p>
          <span>{category}</span>
        </div>
        <div className={css.productListSmallProperties}>
        <div className={css.productListSmall}>
        <p> Calories </p>
          <span>{calories}</span>
        </div>
        <div className={css.productListSmall}>
        <p> Weight </p>
          <span>{amount}</span>
        </div>
        <div className={css.productListSmall}>
        <p>Recommend</p>
          <span>
            <div style={
              {width:"14px",
              height: "14px",
              borderRadius:"50%",
              backgroundColor:recommend  ? "#419B09"  : "#E9101D",
              }}></div>
            {recommend ? 'Yes' : 'No'}</span>
        </div>
        <button type='button' className={css.deleteProductButton}>
              <svg className={css.deleteProductButtonIcon}>
                <use href={svg + '#trash_icon'}></use>
              </svg>
        </button>
        </div>
       
      </li>
    );
};