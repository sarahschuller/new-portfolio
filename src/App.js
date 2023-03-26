import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import { GlobalStyle } from './styles';

// Scroll to the top of the page when changing routes
// https://reactrouter.com/web/guides/scroll-restoration/scroll-to-top
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/about">
            <h1>About Me</h1>
          </Route>
          <Route path="/work">
            <h1>My Work111</h1>
          </Route>
          <Route path="/contact">
            <h1>Contact Me</h1>
          </Route>
          <Route path="/">
            <h1>Main</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
