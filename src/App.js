import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Contacts from './Components/Contacts/Contacts';

function App() {
  return (
   <Router> 
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
   </Router>
  );
}

export default App;
