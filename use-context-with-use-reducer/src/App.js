import "./App.css";
import { Counter } from "./components/Counter";
import { CounterProvider } from "./providers/CounterProvider";

function App() {
  return (
    <div className="App">
      <header>Contador son useContext y useReducer</header>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
}

export default App;
