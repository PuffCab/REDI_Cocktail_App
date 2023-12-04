
import { BrowserRouter, Routes,Route } from 'react-router-dom'

import  Navbar  from './components/Navbar';
import Home from './components/Home';
import Contact from './pages/Contact';

function App() {
 
  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
