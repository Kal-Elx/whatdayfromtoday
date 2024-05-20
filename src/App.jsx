import { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator/Calculator';
import Title from './components/Title/Title';

const App = () => {
  const today = Date.now();
  const [days, setDays] = useState(0);

  return (
    <div className="app-layout">
      <Title
        days={days}
        isNegative={false}
        inputDate={today}
        resultDate={today}
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
          onDeleteTap={() => {
            const dayStr = days.toString();
            return setDays(
              dayStr.length > 1 ? parseInt(dayStr.slice(0, -1)) : 0
            );
          }}
          onResultTap={() => console.log('Result')}
        />
      </div>
    </div>
  );
};

export default App;
