import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Guard from './component/nav/Guard'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login />}/>
          <Route element={ <Guard />}>
            <Route path='/home' element={<Home />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
