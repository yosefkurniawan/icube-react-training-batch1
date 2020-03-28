import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('test app', () => {
  const { container } = render(<App/>);
  const buttons = container.querySelectorAll('button');

  expect(buttons[0].textContent).toBe("+ 1");
  expect(buttons[1].textContent).toBe("+ 5");
  expect(buttons[2].textContent).toBe("+ 10");
  expect(buttons[3].textContent).toBe("+ 100");

  const counter = container.querySelector('#counter');
  expect(counter.textContent).toBe('0');
  fireEvent.click(buttons[0]);
  expect(counter.textContent).toBe("1");
  fireEvent.click(buttons[1]);
  expect(counter.textContent).toBe("6");

});
