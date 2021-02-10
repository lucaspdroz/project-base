import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './global.scss';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

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
