import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div>
      <h2>Counter</h2>
      <CounterContainer/>
      <hr />
      <h2>Todos</h2>
      <TodosContainer />
    </div>
  );
}

export default App;
