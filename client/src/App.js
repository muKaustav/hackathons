

import LoginPage from './routes/auth';
import {Home} from './routes/home';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import {Verification} from './routes/verification';

import { UserInfo } from './routes/userInfo';

function App() {
  return (
    <Router>
    
    <Route path="/" exact component={Home}/>
    <Route path="/verification" component={Verification}/>
    <Route path="/auth" component={LoginPage}/>
    <Route path="/user" component={UserInfo}/>


    </Router>
    
    
  );
}

export default App;
