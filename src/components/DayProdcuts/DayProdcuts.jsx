import css from './DayProducts.module.css';
import { Link } from 'react-router-dom';
//import axios from "axios"
export const DayProducts = () => {
  /*const fetchFood = async(date)  => {
const response = await axios.get(`https://powerpulse-backend.onrender.com/diary/food?date=${date}`)
return response.data
}*/
  //console.log(fetchFood("2023-11-11"));
 /* const exampleData = [
    {
      _id: '650f35ece3f5522fc6396289',
      title: 'Bread Hercules grain',
      category: 'Flour',
      calories: '289',
      weight: '100',
      recommend: true,
    },
    {
      _id: '650f35ece3f5522fc6396299',
      title: 'Rice Semolina',
      category: 'Cereals',
      calories: '340',
      weight: '200',
      recommend: false,
    },
  ];
  const createProductItem = data => {
   
      const { title, category, calories, weight, recommend } = data;
      return (
        <li>
          <div>
            Title
            <span>{title}</span>
          </div>
          <div>
            Category
            <span>{category}</span>
          </div>
          <div>
            Calories
            <span>{calories}</span>
          </div>
          <div>
            Weight
            <span>{weight}</span>
          </div>
          <div>
            Recommend
            <span>{recommend ? 'Yes' : 'No'}</span>
          </div>
        </li>
      );
  };*/
  return (
    <div className={css.productsContainer}>
      <div className={css.productsTopBar}>
        <p className={css.productsTitle}>Products</p>
        <Link to="/products">Add product</Link>
      </div>
      <div className={css.productsBottomBar}>
        <p className={css.noProductsText}>Not found products</p>
      </div>
    </div>
  );
};
