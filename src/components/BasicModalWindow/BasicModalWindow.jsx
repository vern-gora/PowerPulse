import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import sprite from '../../images/svg/sprite.svg';
import style from './BasicModalWindow.module.css';
import productsSelectors from 'redux/products/selectors';

const modalRoot = document.querySelector('#modal-root');

const BasicModalWindow = ({ onCloseModal }) => {
  const [caloriesNumber, setCaloriesNumber] = useState(0);

  const product = useSelector(productsSelectors.getCurrentProduct);
  const productTitle = product.title;

  const CustomInputComponent = props => (
    <input
      className={style.basicModalSelectedProduct}
      type="text"
      value={productTitle}
      {...props}
    />
  );

  const handleChange = e => {
    setCaloriesNumber(e.currentTarget.value);
  };

  const consumedCalories = (caloriesNumber * product.calories) / 100;

  return createPortal(
    <div className={style.overlay}>
      <div className={style.basicModalContainer}>
        <button
          type="button"
          className={style.closeBasicModal}
          onClick={onCloseModal}
        >
          <svg className={style.closeBasicModalIcon} width="22" height="22">
            <use href={sprite + '#close_icon'}></use>
          </svg>
        </button>
        <div className={style.selectedProductDescr}>
          <div className={style.productCardPopUp}>
            <Formik initialValues={{ product: productTitle }}>
              <Form className={style.basicModalForm}>
                <Field
                  as={CustomInputComponent}
                  name="product"
                  value={productTitle}
                  className={style.basicModalSelectedProduct}
                />
                <Field
                  className={style.basicModalFormInput}
                  type="text"
                  name="weight"
                  label="grams"
                  onChange={handleChange}
                />
              </Form>
            </Formik>
            <span className={style.weightLabel}>grams</span>
          </div>
          <p className={style.caloriesCount}>
            Calories:
            <span className={style.kcalNumber}>
              {' '}
              {consumedCalories ? consumedCalories : 0}
            </span>
          </p>
          <div className={style.selectedProdBtns}>
            <button type="button" className={style.addDiaryBtn}>
              Add to diary
            </button>
            <button
              type="button"
              className={style.cancelAddBtn}
              onClick={onCloseModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default BasicModalWindow;
