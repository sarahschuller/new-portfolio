import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import {
  AboutMe,
  Work,
  Contact,
} from './pages';
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
            <AboutMe />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
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
