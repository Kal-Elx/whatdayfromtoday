import { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator/Calculator';
import Title from './components/Title/Title';

const App = () => {
  const [days, setDays] = useState(1);
  const [inputDate, setInputDate] = useState(Date.now());
  const [resultDate, setResultDate] = useState(addDays(Date.now(), days));

  return (
    <div className="app-layout">
      <Title
        layout={'title-layout'}
        days={days}
        isNegative={false}
        inputDate={inputDate}
        resultDate={resultDate}
        onDateSelected={setInputDate}
      />

      <Calculator
        layout={'calculator-layout'}
        onNumberTap={(number) =>
          setDays(parseInt(`${days}${number}`.slice(0, days < 0 ? 6 : 5)))
        }
        onOperatorTap={() => setDays(-days)}
        onDeleteTap={() => setDays(parseInt(days.toString().slice(0, -1)) || 0)}
        onResultTap={() => setResultDate(addDays(inputDate, days))}
      />
    </div>
  );
};

const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export default App;
