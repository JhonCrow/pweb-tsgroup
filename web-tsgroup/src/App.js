import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Campus from './Campus';
import Form from './Form';
import Home from './Home';
import NavBar from './NavBar';
import Programs from './Programs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/program' element={<Programs />} />
          <Route path='/campus' element={<Campus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
