import React from 'react';

import Home from './views/Home';

import { AppProvider } from './context/context';

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="App">
        <Home/>
      </div>
    </AppProvider>
  )
}

export default App;
