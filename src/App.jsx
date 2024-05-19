import './App.css';
import Calculator from './components/Calculator/Calculator';
import Title from './components/Title/Title';

const App = () => {
  const today = Date.now();

  return (
    <div className="app-layout">
      <Title days={0} isNegative={false} inputDate={today} resultDate={today} />
      <div
        style={{
          width: 500,
          height: 500,
        }}
      >
        <Calculator
          onNumberTap={(number) => console.log(number)}
          onOperatorTap={() => console.log('Operator')}
          onDeleteTap={() => console.log('Delete')}
          onResultTap={() => console.log('Result')}
        />
      </div>
    </div>
  );
};

export default App;
