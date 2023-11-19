import PropTypes from 'prop-types';
import css from './RadioOption.module.css';

const RadioOption = ({ id, name, value, label, onChange, checked }) => (
  <div className={css.radio}>
    <input
      className={css.radio_input}
      type="radio"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      checked={checked}
    />
    <label className={css.radio_label} htmlFor={id}>
      {label}
    </label>
  </div>
);

RadioOption.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioOption;
