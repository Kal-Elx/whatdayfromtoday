import { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator/Calculator';
import Title from './components/Title/Title';

const App = () => {
  const [days, setDays] = useState(0);
  const [inputDate, setInputDate] = useState(Date.now());
  const [resultDate, setResultDate] = useState(Date.now());

  return (
    <div className="app-layout">
      <Title
        days={days}
        isNegative={false}
        inputDate={inputDate}
        resultDate={resultDate}
        onDateSelected={setInputDate}
      />
      <div className="calculator">
        <Calculator
          onNumberTap={(number) =>
            setDays(parseInt(`${days}${number}`.slice(0, days < 0 ? 6 : 5)))
          }
          onOperatorTap={() => setDays(-days)}
          onDeleteTap={() =>
            setDays(parseInt(days.toString().slice(0, -1)) || 0)
          }
          onResultTap={() => {
            const result = new Date(inputDate);
            result.setDate(result.getDate() + days);
            return setResultDate(result);
          }}
        />
      </div>
    </div>
  );
};

export default App;
