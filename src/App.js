import './App.css';
import { BrowserRouter,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import Form from './components/Form';
import Result from './components/Result';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Form></Form>
        <Switch>
          <Route exact path='/:category/:id'>
            <Result></Result>
          </Route>
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
