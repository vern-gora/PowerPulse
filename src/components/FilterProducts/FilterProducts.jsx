import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './FilterProducts.module.css';
import sprite from '../../images/svg/sprite.svg';
import productsSelectors from 'redux/products/selectors';
import { filterProducts, clearFilter } from 'redux/products/productsSlice';
import productsOperations from 'redux/products/operations';

const FilterProducts = () => {
  const [isFilterEmpty, setIsFilterEmpty] = useState(true);

  const dispatch = useDispatch();
  const filter = useSelector(productsSelectors.getFilter);

  const onFilterChange = e => {
    if (e.currentTarget.value === '') {
      setIsFilterEmpty(true);
      return;
    }
    setIsFilterEmpty(false);
  };

  const onFocusChange = e => {
    dispatch(filterProducts(e.currentTarget.value));

    const searchParam = {
      category: `${filter}`,
    };
    dispatch(productsOperations.getFilteredProducts(searchParam));
  };

  const handleFilter = e => {
    e.currentTarget.nextElementSibling.value = '';

    setIsFilterEmpty(true);
    dispatch(clearFilter());
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
