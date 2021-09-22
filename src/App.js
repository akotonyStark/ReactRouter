import logo from './logo.svg'
import './App.css'
import { Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Products from './pages/Products'

function App() {
  return (
    <div className='App'>
      <Route path='/welcome'>
        <Welcome />
      </Route>

      <Route path='/products'>
        <Products />
      </Route>
      <header className='App-header'>Lets get started</header>
    </div>
  )
}

export default App
