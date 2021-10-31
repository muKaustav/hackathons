import Login from './routes/Login/Login'
import Landing from './routes/Landing/Landing'
import FaceAuth from "./routes/FaceAuth/FaceAuth"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.scss'

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/login' component={Login} />
        <Route path='/face' component={FaceAuth} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
