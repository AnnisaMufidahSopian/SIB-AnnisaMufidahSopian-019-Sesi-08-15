import './App.css';
import CounterClass from "./features/counter/CounterClassComponent"
import CounterFn from "./features/counter/CounterFunctionalComponent"

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <CounterClass />
      <hr/>
      <CounterFn />
    </div>
  );
}

export default App;
