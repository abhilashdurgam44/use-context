import { createContext } from 'react';
import './App.css';
import ChildA from './components/ChildA';

// Define the context outside of the component
const Context = createContext();

function App() {
  const name = "Yoshita";

  return (
    <div>
      {/* Provide the context value using the `value` prop */}
      <Context.Provider value={name}>
        <ChildA />
      </Context.Provider>
    </div>
  );
}

export default App;
export { Context }; // Export the context for use in other components
