import DatePicker from '../DatePicker/DatePicker';
import './Title.css';

const Title = ({ days, inputDate, resultDate, onDateSelected }) => {
  return (
    <div className="title">
      <span className="day-input">{`${days}`}</span>
      {' Days from '}
      <DatePicker
        date={inputDate}
        onDateSelected={onDateSelected}
        child={
          <span className="input-date">{`${formatDate(
            inputDate,
            false
          )}`}</span>
        }
      />
      {' is '}
      <span className="result-date">{`${formatDate(resultDate, true)}`}</span>
    </div>
  );
};

const formatDate = (date, showWeekday) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  if (showWeekday) {
    options.weekday = 'long';
  }

  return new Date(date)
    .toLocaleDateString('en-US', options)
    .replaceAll(',', '');
};

export default Title;
