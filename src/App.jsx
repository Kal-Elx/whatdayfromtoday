import './App.css';
import Calculator from './components/Calculator/Calculator';

const App = () => {
  return (
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
  );
};

export default App;
