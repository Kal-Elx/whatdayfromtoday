import { useRive, EventType, RiveEventType } from '@rive-app/react-canvas-lite';
import { useEffect } from 'react';
import useKeypress from 'react-use-keypress';
import './Calculator.css';

const Calculator = ({
  layout,
  onNumberTap,
  onOperatorTap,
  onDeleteTap,
  onResultTap,
}) => {
  const STATE_MACHINE_NAME = 'Group State';

  const { rive, RiveComponent } = useRive({
    src: 'calculator.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const onRiveEventReceived = (riveEvent) => {
    const eventData = riveEvent.data;
    if (eventData.type === RiveEventType.General) {
      switch (eventData.name) {
        case '0-click':
          onNumberTap(0);
          break;
        case '1-click':
          onNumberTap(1);
          break;
        case '2-click':
          onNumberTap(2);
          break;
        case '3-click':
          onNumberTap(3);
          break;
        case '4-click':
          onNumberTap(4);
          break;
        case '5-click':
          onNumberTap(5);
          break;
        case '6-click':
          onNumberTap(6);
          break;
        case '7-click':
          onNumberTap(7);
          break;
        case '8-click':
          onNumberTap(8);
          break;
        case '9-click':
          onNumberTap(9);
          break;
        case 'operator-click':
          onOperatorTap();
          break;
        case 'delete-click':
          onDeleteTap();
          break;
        case 'result-click':
          onResultTap();
          break;
      }
    }
  };

  useEffect(() => {
    if (rive) {
      rive.on(EventType.RiveEvent, onRiveEventReceived);
    }
  }, [rive, onNumberTap, onOperatorTap, onDeleteTap, onResultTap]);

  useKeypress(
    [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'Backspace',
      ' ',
      'Enter',
      '=',
      '+',
      '-',
    ],
    (event) => {
      console.log(event.key);
      if (event.key === '+' || event.key === '-') {
        onOperatorTap();
      } else if (event.key === 'Backspace') {
        onDeleteTap();
      } else if (
        event.key === 'Enter' ||
        event.key === '=' ||
        event.key === ' '
      ) {
        onResultTap();
      } else {
        onNumberTap(parseInt(event.key));
      }
    }
  );

  return (
    <div className={`${layout} calculator-container`}>
      <RiveComponent className="calculator" />
    </div>
  );
};

export default Calculator;
