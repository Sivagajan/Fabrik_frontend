import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Guard from './component/Guard'
import Login from './pages/Login'
import Home from './pages/Home'
import Machine from './component/machines/Machine'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login />}/>
          <Route element={ <Guard />}>
            <Route path='/home' element={<Home />}/>
            <Route path='/maschinen' element={< Machine/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
