import { NavLink } from 'react-router-dom';
import css from './NavigationMenu.module.css';
function NavigationMenu() {
  return (
    <nav className={css.navigaton}>
      <ul className={css.navigation_list}>
        <li>
          <NavLink to="/diary" className={css.navigation_link}>
            Diary
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={css.navigation_link}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/exercises" className={css.navigation_link}>
            Exercises
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
