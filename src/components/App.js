import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './views/layout/Header/Header';
import Main from './views/layout/Main/Main';

const App = () => {
  return (
    <div>
       <BrowserRouter>
        <Header />
          <div style={{paddingTop: '75px' , minHeight: 'calc(100vh - 80px)'}}>
          <Main />
          </div>
       </BrowserRouter>        
      </div>
  );
};
export default App;