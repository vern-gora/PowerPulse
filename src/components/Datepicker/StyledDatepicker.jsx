import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, IconSvg } from './StyledDatepicker.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import sprite from '../../images/svg/sprite.svg';
import styles from '../UserForm/UserForm.module.css';

const StyledDatepicker = ({ selectedDate, setSelectedDate }) => {
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <>
      <div style={{ position: 'relative' }}>
        <IconSvg width="18" height="18">
          <use href={`${sprite}#calendar_icon`}></use>
        </IconSvg>

        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          customInput={
            <input
              className={styles.input_field}
              style={{ cursor: 'pointer' }}
            />
          }
          dateFormat={'dd.MM.yyyy'}
          calendarStartDay={1}
          formatWeekDay={day => day.substring(0, 1)}
        />

        <CalendarGlobalStyles />
      </div>
    </>
  );
};

StyledDatepicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func,
};

export default StyledDatepicker;
