import ReactDatePicker from 'react-datepicker';
import './DatePicker.css';

const DatePicker = ({ date, onDateSelected, child }) => {
  return (
    <div>
      <ReactDatePicker
        selected={date}
        onChange={onDateSelected}
        customInput={child}
      />
    </div>
  );
};

export default DatePicker;
