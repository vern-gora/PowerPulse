// export const DaySwitch =()=>{
//     return(
//         <section>
//             <h5>Here will  be  day switcher</h5>
//         </section>
//     )
// }
import { useState } from 'react';
import PropTypes from 'prop-types';
import StyledDatepicker from '../../components/StyledDatepicker/StyledDatepicker';
import {
  Wrap,
  CalenderBtn,
  DateLabel,
  BtnPrev,
  BtnNext,
  Svg,
  CalenderIconWrap,
} from './DaySwitch.styled';
import sprite from '../../images/svg/sprite.svg';

const DaySwitch = ({ currentDate, setCurrentDate, formattedDate }) => {
  const [isDatepickerOpen, setIsDatepickerOpen] = useState(false);

  const switchToPreviousDay = () => {
    const previousDay = new Date(currentDate);
    previousDay.setDate(previousDay.getDate() - 1);
    setCurrentDate(previousDay);
  };

  const switchToNextDay = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
    setCurrentDate(nextDay);
  };

  const handleCalenderBtnClick = () => {
    setIsDatepickerOpen(prev => !prev);
  };

  return (
    <Wrap>
      <CalenderBtn onClick={handleCalenderBtnClick} id="calenderBtn">
        <DateLabel>{formattedDate}</DateLabel>
        <CalenderIconWrap>
          <Svg>
            <use href={`${sprite}#calendar_icon`} />
          </Svg>
        </CalenderIconWrap>
      </CalenderBtn>

      <BtnPrev
        className="button"
        tabIndex={isDatepickerOpen ? -1 : 0}
        onClick={switchToPreviousDay}
      >
        <Svg>
          <use href={`${sprite}#chevron_left_icon`} />
        </Svg>
      </BtnPrev>

      <BtnNext
        className="button"
        tabIndex={isDatepickerOpen ? -1 : 0}
        onClick={switchToNextDay}
      >
        <Svg>
          <use href={`${sprite}#chevron_right_icon`} />
        </Svg>
      </BtnNext>

      {isDatepickerOpen && (
        <StyledDatepicker
          selectedDate={currentDate}
          setSelectedDate={setCurrentDate}
          isOpen={isDatepickerOpen}
          setIsOpen={setIsDatepickerOpen}
        />
      )}
    </Wrap>
  );
};

DaySwitch.propTypes = {
  currentDate: PropTypes.instanceOf(Date),
  setCurrentDate: PropTypes.func,
  formattedDate: PropTypes.string,
};

export default DaySwitch;
