import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Main from './components/Main/Main';
// import PageNotFound from './components/Main/PageNotFound';

function App() {
  return (
    <div className='main-bg'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Main />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
