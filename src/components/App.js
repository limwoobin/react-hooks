import React , { Suspense } from 'react';
import { Switch, BrowserRouter , Route } from 'react-router-dom';
import Home from './Home';
import DynamicPage from './DynamicPage';
import NoMatch from './NoMatch';
import Header from './layout/Header/Header';
// import study from './study/hooksUseInput';
// import study from './study/hooksUseTabs';
// import study from './study/hooksUseEffect';
// import study from './study/hooksUseTitle';
// import study from './study/hooksUseClick';
// import study from './study/hooksUseConfirm';
// import study from './study/hooksUsePreventLeave';
// import study from './study/test';
import study from './study/Average';

const App = () => {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Header />
        <div style={{paddingTop: '75px' , minHeight: 'calc(100vh - 80px)' }}>
          <BrowserRouter>
            <Switch>
              {/* <Route exact path="/" component={Home} /> */}
              <Route exact path="/" component={study} />
              <Route exact path="/dynamic" component={DynamicPage} />
              <Route component={NoMatch} />
            </Switch>
          </BrowserRouter>
        </div>
      </Suspense>
  );
};
export default App;