import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { Repos, Users } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={() => <Redirect to='/users' />} />
        <Route path='/users' component={Users} />
        <Route path='/repos/:username' component={Repos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
