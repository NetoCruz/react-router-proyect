import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Contacts from './Components/Contacts/Contacts';
import Profile from './Components/Profile/Profile';
import Data from "./Contacts"

function App() {
  return (
   <Router> 
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/profile/:userId" element={<Profile data={Data}/>} />
      </Routes>
   </Router>
  );
}

export default App;
