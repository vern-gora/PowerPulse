import css from './DayProducts.module.css';
import { Link } from 'react-router-dom';
import { DayProductItem } from './DayProductItem';
import { selectConsumedFood,  selectIsLoading,  selectError } from 'redux/diary/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
// import { fetchFoodNameById } from 'redux/diary/operations';
import { Rings } from 'react-loader-spinner';
import svg from '../../images/svg/sprite.svg';
import { useDispatch } from 'react-redux';
import { fetchFoodAndExercises } from 'redux/diary/operations';
import { useEffect } from 'react';
export const DayProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const date = '17/11/2023';
    dispatch(fetchFoodAndExercises(date));
  }, [dispatch]);

  const productsData = useSelector(selectConsumedFood);
  const  isLoading =  useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = [...productsData];
  
  return (
    <div className={css.productsContainer}>
      {isLoading?(    
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
        />):( error?( <p className={css.errorMessage}>Error</p>):(<>
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
            {!data && <p className={css.noProductsText}>Not found products</p>}
            {data && (
              <>
                <ul className={css.adaptiveTitlesList}>
                  <li className={css.adaptiveTitle}>Title</li>
                  <li className={css.adaptiveTitle}>Category</li>
                  <li className={css.adaptiveTitle}>Calories</li>
                  <li className={css.adaptiveTitle}>Weight</li>
                  <li className={css.adaptiveTitle}>Recommend</li>
                </ul>
                <ul className={css.productsList}>
                  {data.map((item, index) => {
                    return <DayProductItem data={item} key={index} />;
                  })}
                </ul>
              </>
            )}
          </div>
          </>)
        )}
      
    </div>
  );
};
