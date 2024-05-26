import DatePicker from '../DatePicker/DatePicker';
import './Title.css';

const Title = ({ days, inputDate, resultDate, onDateSelected }) => {
  return (
    <div className="title">
      <span className="day-input prevent-select">{`${days}`}</span>
      <span className="prevent-select">{' Days from '}</span>
      <DatePicker
        date={inputDate}
        onDateSelected={onDateSelected}
        child={
          <span className="input-date prevent-select">{`${formatDate(
            inputDate,
            false,
            true
          )}`}</span>
        }
      />
      <span className="prevent-select">{' is '}</span>
      <span className="result-date">{`${formatDate(resultDate)}`}</span>
    </div>
  );
};

const formatDate = (date, showWeekday = true, showRelativeDay = false) => {
  if (showRelativeDay) {
    if (isYesterday(date)) {
      return 'YESTERDAY';
    } else if (isToday(date)) {
      return 'TODAY';
    } else if (isTomorrow(date)) {
      return 'TOMORROW';
    }
  }

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

const isYesterday = (date) => dateDiffInDays(date, Date.now()) == 1;

const isToday = (date) => dateDiffInDays(date, Date.now()) == 0;

const isTomorrow = (date) => dateDiffInDays(date, Date.now()) == -1;

const dateDiffInDays = (startDate, endDate) => {
  const a = new Date(startDate);
  const b = new Date(endDate);

  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};

export default Title;
