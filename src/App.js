import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './global.scss';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exatc path="/">
          <Home title="Um titulo passado por props" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
