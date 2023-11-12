import css from './DayProducts.module.css';

export const DayProductItem = ({ data }) => {
    const { title, category, calories, weight, recommend } = data;
    return (
      <li className={css.productListItem}>
        <div className={css.productListLarge}>
         <p> Title </p>
          <span>{title}</span>
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
          <span>{weight}</span>
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
        </div>
      </li>
    );
};