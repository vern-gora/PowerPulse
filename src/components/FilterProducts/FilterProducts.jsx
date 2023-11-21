import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './FilterProducts.module.css';
import sprite from '../../images/svg/sprite.svg';
import { filterProducts, clearFilter } from 'redux/products/productsSlice';
import productsOperations from 'redux/products/operations';

const FilterProducts = ({ categoryFilter }) => {
  const [isFilterEmpty, setIsFilterEmpty] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleSubmit = e => {
      if (e.code === 'Enter') {
        dispatch(filterProducts(e.target.value));
      }
    };

    window.addEventListener('keydown', handleSubmit);

    return () => window.removeEventListener('keydown', handleSubmit);
  }, [dispatch]);

  const onFilterChange = e => {
    if (e.currentTarget.value === '') {
      setIsFilterEmpty(true);
      return;
    }
    setIsFilterEmpty(false);
  };

  const onFocusChange = e => {
    dispatch(filterProducts(e.currentTarget.value));
  };

  const handleFilter = e => {
    e.currentTarget.nextElementSibling.value = '';

    setIsFilterEmpty(true);
    dispatch(clearFilter());

    if (categoryFilter) {
      const searchParams = {
        category: categoryFilter,
      };
      dispatch(productsOperations.getFilteredProducts(searchParams));
      return;
    }
    dispatch(productsOperations.fetchProducts());
  };

  return (
    <>
      <label className={style.searchLabel}>
        <button type="button" className={style.filterBtn}>
          <svg className={style.searchIcon} width="18" height="18">
            <use href={sprite + '#search_icon'}></use>
          </svg>
        </button>
        {!isFilterEmpty && (
          <button
            className={style.clearFilterBtn}
            type="button"
            onClick={handleFilter}
          >
            <svg className={style.clearSearchIcon} width="18" height="18">
              <use href={sprite + '#close_icon'}></use>
            </svg>
          </button>
        )}
        <input
          className={style.searchField}
          type="text"
          placeholder="Search"
          // value={filter}
          onChange={onFilterChange}
          onBlur={onFocusChange}
        />
      </label>
    </>
  );
};

export default FilterProducts;
