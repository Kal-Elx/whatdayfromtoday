import ReactDatePicker, { CalendarContainer } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({ date, onDateSelected, child }) => {
  return (
    <div className="date-picker">
      <ReactDatePicker
        selected={date}
        onChange={onDateSelected}
        customInput={child}
        // withPortal
      />
    </div>
  );
};

export default DatePicker;
