import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

// import pages
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Error from './pages/Error';

// import components
import SharedComponent from '../src/components/SharedComponent'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedComponent />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
