import React from 'react';
import { NameContext, AgeContext } from '../App';

const ChildC = () => {
  return (
    <NameContext.Consumer>
      {(name) => (
        <AgeContext.Consumer>
          {(age) => (
            <h1>
              Name is: {name}  Age is {age}
            </h1>
          )}
        </AgeContext.Consumer>
      )}
    </NameContext.Consumer>
  );
}

export default ChildC;
