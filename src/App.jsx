import React from 'react';

import Home from './Components/Home/Home'
import Summary from './Components/Summary/Summary'
import Perks from './Components/Perks/Perks'

function App() {
  return (
    <div className='text-white snap-y snap-proximity h-screen overflow-y-scroll'>
      <Home />
      <Summary />
      <Perks />
    </div>
  );
}

export default App;
