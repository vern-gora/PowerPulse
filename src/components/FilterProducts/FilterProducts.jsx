import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './FilterProducts.module.css';
import sprite from '../../images/svg/sprite.svg';
import productsSelectors from 'redux/products/selectors';
import { filterProducts, clearFilter } from 'redux/products/productsSlice';

const FilterProducts = () => {
  const [isFilterEmpty, setIsFilterEmpty] = useState(true);

  const dispatch = useDispatch();
  const filter = useSelector(productsSelectors.getFilter);

  const onFilterChange = e => {
    setIsFilterEmpty(false);
    dispatch(filterProducts(e.currentTarget.value));
  };

  const handleFilter = () => {
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
          value={filter}
          onChange={onFilterChange}
        />
      </label>
    </>
  );
};

export default FilterProducts;
