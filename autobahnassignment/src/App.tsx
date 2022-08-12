import Dashboard from './Pages/Dashboard';
import { Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Route path="/dashboard" exact component={Dashboard} />
      <Route path="*" component={Dashboard} />
      </Route>
    </Switch>
  );
}

export default App;
