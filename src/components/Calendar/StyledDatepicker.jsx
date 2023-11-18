import { useState } from 'react';
import { format, addDays, subDays } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './StyledDatepicker.module.css';

const StyledDatepicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const CustomInput = ({ value, onClick }) => {
    return (
      <button className={styles.titleWrapper} onClick={onClick}>
        {format(selectedDate, 'dd-MM-yyyy')}
      </button>
    );
  };

  const handlePreviousDay = () => {
    setSelectedDate(prevDate => subDays(prevDate, 1));
  };

  const handleNextDay = () => {
    setSelectedDate(prevDate => addDays(prevDate, 1));
  };

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={date => {
          setSelectedDate(date);
        }}
        customInput={<CustomInput />}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
        formatWeekDay={day => day.substr(0, 1)}
        className={styles.reactDatepicker}
      />
      <div className={styles.datepickerControls}>
        <button onClick={handlePreviousDay}>{'\u2190'}</button>
        <button onClick={handleNextDay}>{'\u2192'}</button>
      </div>
    </>
  );
};

export default StyledDatepicker;
