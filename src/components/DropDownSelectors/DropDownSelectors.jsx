import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import style from './DropDownSelectors.module.css';
import sprite from '../../images/svg/sprite.svg';
import productsSelectors from 'redux/products/selectors';

const DropDownSelectors = ({ onCategoryFilterSelect }) => {
  const [isCategoryListOpen, setCategoryIsListOpen] = useState(false);
  const [isTypeListOpen, setTypeListOpen] = useState(false);

  const categories = useSelector(productsSelectors.getProductsCategories);

  const handleDropDownCategoryList = () => {
    setCategoryIsListOpen(true);
    setTypeListOpen(false);

    if (isCategoryListOpen) {
      setCategoryIsListOpen(false);
    }
  };

  const handleDropDownType = () => {
    setTypeListOpen(true);
    setCategoryIsListOpen(false);

    if (isTypeListOpen) {
      setTypeListOpen(false);
    }
  };

  const onTypeListClose = () => {
    setTypeListOpen(false);
  };

  const onCategorySelect = e => {
    const selectedCategory = e.currentTarget.dataset.category;

    onCategoryFilterSelect(selectedCategory);
    setCategoryIsListOpen(false);
  };

  return (
    <>
      <div className={style.categoryListWrapper}>
        <button
          type="button"
          className={style.dropBtnDown}
          onClick={handleDropDownCategoryList}
        >
          Categories
          <svg className={style.dropDownIcon} width="18" height="18">
            <use href={sprite + '#icon-chevron-down'}></use>
          </svg>
        </button>
        {isCategoryListOpen && (
          <ul className={style.catDropList}>
            {categories.map(category => {
              return (
                <li key={nanoid(5)} className={style.categoryItem}>
                  <button
                    type="button"
                    className={style.selectCatBtn}
                    onClick={onCategorySelect}
                    data-category={category}
                  >
                    {category}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {/* !!!!!!!!! */}
      <div className={style.dropDownAllWrapper}>
        <button
          type="button"
          className={style.dropAllBtn}
          onClick={handleDropDownType}
        >
          All
          <svg className={style.dropDownIcon} width="18" height="18">
            <use href={sprite + '#icon-chevron-down'}></use>
          </svg>
        </button>

        {isTypeListOpen && (
          <ul className={style.allDropList}>
            <button
              type="button"
              className={style.selectCatBtn}
              onClick={onTypeListClose}
            >
              All
            </button>
            <button
              type="button"
              className={style.selectCatBtn}
              onClick={onTypeListClose}
            >
              Recommended
            </button>
            <button
              type="button"
              className={style.selectCatBtn}
              onClick={onTypeListClose}
            >
              Not recommended
            </button>
          </ul>
        )}
      </div>
    </>
  );
};

export default DropDownSelectors;
