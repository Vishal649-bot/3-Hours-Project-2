import React from 'react';
import Form from './components/Form';
import { MyContextProvider } from './MyContext';

function App() {
  return (
    <MyContextProvider>
      <Form />
      {/* Other components go here */}
    </MyContextProvider>
  );
}

export default App;