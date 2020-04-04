import React , { Suspense } from 'react';
import { Switch, BrowserRouter , Route } from 'react-router-dom';
import Home from './Home';
import DynamicPage from './DynamicPage';
import NoMatch from './NoMatch';
import Header from './layout/Header/Header';

const App = () => {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Header />
        <div style={{paddingTop: '75px' , minHeight: 'calc(100vh - 80px)' }}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dynamic" component={DynamicPage} />
              <Route component={NoMatch} />
            </Switch>
          </BrowserRouter>
        </div>
      </Suspense>
  );
};
export default App;