import { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator/Calculator';
import Title from './components/Title/Title';

const App = () => {
  const today = Date.now();
  const [days, setDays] = useState(0);
  const [resultDate, setResultDate] = useState(today);

  return (
    <div className="app-layout">
      <Title
        days={days}
        isNegative={false}
        inputDate={today}
        resultDate={resultDate}
      />
      <div
        style={{
          width: 500,
          height: 500,
        }}
      >
        <Calculator
          onNumberTap={(number) => setDays(parseInt(`${days}${number}`))}
          onOperatorTap={() => setDays(-days)}
          onDeleteTap={() =>
            setDays(parseInt(days.toString().slice(0, -1)) || 0)
          }
          onResultTap={() => {
            const result = new Date();
            result.setDate(result.getDate() + days);
            return setResultDate(result);
          }}
        />
      </div>
    </div>
  );
};

export default App;
