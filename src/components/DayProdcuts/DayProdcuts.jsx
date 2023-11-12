import css from './DayProducts.module.css';
import { Link } from 'react-router-dom';
import { DayProductItem } from "./DayProductItem"
//import axios from "axios"
export const DayProducts = () => {
  /*const fetchFood = async(date)  => {
const response = await axios.get(`https://powerpulse-backend.onrender.com/diary/food?date=${date}`)
return response.data
}*/
  //console.log(fetchFood("10/11/2023"));
  const exampleData = [
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
 
  return (
    <div className={css.productsContainer}>
      <div className={css.productsTopBar}>
        <p className={css.productsTitle}>Products</p>
        <Link to="/products">Add product</Link>
      </div>
      <div className={css.productsBottomBar}>
        {
          !exampleData&&<p className={css.noProductsText}>Not found products</p>
        }
        <ul className={css.adaptiveTitlesList}>
          <li className={css.adaptiveTitle}>Title</li>
          <li className={css.adaptiveTitle}>Category</li>
          <li className={css.adaptiveTitle}>Calories</li>
          <li className={css.adaptiveTitle}>Weight</li>
          <li className={css.adaptiveTitle}>Recommend</li>

        </ul>
        <ul className={css.productsList}>
        {exampleData.map(item =>  {
          return <DayProductItem data={item}  key={item.title}/>;
        })}
        </ul>
      </div>
    </div>
  );
};
