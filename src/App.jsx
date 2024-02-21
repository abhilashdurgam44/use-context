import React, { createContext } from 'react';
import './App.css';
import ChildA from './components/ChildA';

// Define the contexts outside of the component
const NameContext = createContext();
const AgeContext = createContext();

function App() {
  const name = "Yoshita";
  const age = 23;

  return (
    <div>
      {/* Provide the context values using the `value` prop */}
      <NameContext.Provider value={name}>
        <AgeContext.Provider value={age}>
          <ChildA />
        </AgeContext.Provider>
      </NameContext.Provider>
    </div>
  );
}

export default App;
export { NameContext, AgeContext }; // Export the contexts for use in other components
