import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  /*const title = 'Welcome to the New Blog';*/
  const likes = 50

  //booleans and objects will not display on websites. Like the one below.

  //const person = { name : 'Yoshi', age: 30};

  const link = 'https://www.google.com/';

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">    
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;






