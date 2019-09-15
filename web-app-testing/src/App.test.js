import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
// import 'jest-dom/extend-expect';

import App from './App';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

test('App renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Display renders without crashing', () => {
  const div = document.createElement('div');
  render(<Display />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Dashboard renders without crashing', () =>{
  const div = document.createElement('div');
  render(<Dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
})

test("Verify ball and strike are present", () => {
  const { getByText } = render(<App />);

  getByText("Ball");
  getByText("Strike");
});
