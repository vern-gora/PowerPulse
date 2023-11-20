import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import style from './DropDownSelectors.module.css';
import sprite from '../../images/svg/sprite.svg';
import productsSelectors from 'redux/products/selectors';
import productsOperations from 'redux/products/operations';
import { selectUser } from 'redux/auth/selectors';

const DropDownSelectors = ({ onCategoryFilterSelect, onTypeSelect }) => {
  const [isCategoryListOpen, setCategoryIsListOpen] = useState(false);
  const [isTypeListOpen, setTypeListOpen] = useState(false);

  const dispatch = useDispatch();

  const currentUser = useSelector(selectUser);

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

  const onCategorySelect = e => {
    const selectedCategory = e.currentTarget.dataset.category;

    console.log(e.currentTarget.value);

    onCategoryFilterSelect(selectedCategory);
    setCategoryIsListOpen(false);
  };

  const onTypeSelection = e => {
    const type = e.currentTarget.dataset.type;

    onTypeSelect(type);

    setTypeListOpen(false);

    const userBloodType = currentUser.blood;
    const searchParam = { category: `${userBloodType}` };
    dispatch(productsOperations.getFilteredProducts(searchParam));
  };

  return (
    <>
      <div className={style.categoryListWrapper}>
        <button
          type="button"
          className={style.dropBtnDown}
          onClick={handleDropDownCategoryList}
          value="Categories"
        >
          Categories
          <svg className={style.dropDownIcon} width="18" height="18">
            <use href={sprite + '#icon-chevron-down'}></use>
          </svg>
        </button>
        {isCategoryListOpen && (
          <ul className={style.catDropList}>
            <li key={nanoid(5)} className={style.categoryItem}>
              <button
                type="button"
                className={style.selectCatBtn}
                data-category={'all'}
                onClick={onCategorySelect}
              >
                All categories
              </button>
            </li>
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
            <li key={nanoid(5)} className={style.typeItem}>
              <button
                type="button"
                className={style.selectCatBtn}
                onClick={onTypeSelection}
                data-type="all"
              >
                All
              </button>
            </li>
            <li key={nanoid(5)} className={style.typeItem}>
              <button
                type="button"
                className={style.selectCatBtn}
                onClick={onTypeSelection}
                data-type="recommended"
              >
                Recommended
              </button>
            </li>
            <li key={nanoid(5)} className={style.typeItem}>
              <button
                type="button"
                className={style.selectCatBtn}
                onClick={onTypeSelection}
                data-type="not-recommended"
              >
                Not recommended
              </button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default DropDownSelectors;

DropDownSelectors.propTypes = {
  onCategoryFilterSelect: PropTypes.func.isRequired,
  onTypeSelect: PropTypes.func.isRequired,
};
