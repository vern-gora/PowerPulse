import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TitlePage from 'components/TitlePage/TitlePage';
import ProductsItem from 'components/ProductsItem/ProductsItem';
import FilterProducts from 'components/FilterProducts/FilterProducts';
import DropDownSelectors from 'components/DropDownSelectors/DropDownSelectors';
import { Rings } from 'react-loader-spinner';
import style from './ProductsPage.module.css';
import BasicModalWindow from 'components/BasicModalWindow/BasicModalWindow';
import productsOperations from 'redux/products/operations';
import productsSelectors from 'redux/products/selectors';
import { getUserParams } from 'redux/auth/operations';

const ProductsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [filterByRecommended, setFilterByRecommended] = useState(false);
  const [filterByBloodType, setFilterByBloodType] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector(productsSelectors.getProducts);

  useEffect(() => {
    dispatch(getUserParams());
  }, [dispatch]);

  useEffect(() => {
    dispatch(productsOperations.fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(productsOperations.fetchProductsCategories());
  }, [dispatch]);

  const onOpenModal = e => {
    const chosenProduct = e.target.closest('li');
    const chosenProductId = chosenProduct.dataset.id;
    dispatch(productsOperations.getProductById(chosenProductId));

    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  const onCategoryFilterSelect = category => {
    if (category === 'all') {
      setCategoryFilter('');
      return;
    }

    setCategoryFilter(category);
  };

  const onTypeSelect = type => {
    switch (type) {
      // case 'all':
      //   break;
      case 'recommended':
        setFilterByRecommended(true);
        setFilterByBloodType(true);
        break;
      case 'not-recommended':
        setFilterByRecommended(false);
        setFilterByBloodType(true);
        break;
      default:
        setFilterByRecommended(false);
        setFilterByBloodType(false);
    }
  };

  return (
    <div className={style.prodContainer}>
      <p className={style.filtersTitle}>Filters</p>
      <div className={style.desktopCntrlWrap}>
        <TitlePage style={style.productsTitle} title="Products" />
        <div className={style.filtersCtrls}>
          <FilterProducts />
          <div className={style.dropDownContainer}>
            <DropDownSelectors
              onCategoryFilterSelect={onCategoryFilterSelect}
              onTypeSelect={onTypeSelect}
            />
          </div>
        </div>
      </div>
      {products.length !== 0 ? (
        <ul className={style.cardsWrapper}>
          <ProductsItem
            onOpenModal={onOpenModal}
            categoryFilter={categoryFilter}
            filterByRecommended={filterByRecommended}
            filterByBloodType={filterByBloodType}
          />
        </ul>
      ) : (
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
      )}
      {showModal && <BasicModalWindow onCloseModal={onCloseModal} />}
    </div>
  );
};

export default ProductsPage;
