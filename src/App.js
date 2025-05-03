import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import AddNotes from './components/AddNotes';
import SavedNotes from './components/SavedNotes';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';


function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (messege ,type) => {
    setAlert({
      msg: messege,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
      <NoteState>
        <Router>
          <div className='pt-16'>
            <Navbar showAlert={showAlert}/>
            <Alert alert={alert} />
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/about" element={<About showAlert={showAlert} />} />
              <Route exact path="/addnotes" element={<AddNotes showAlert={showAlert} />} />
              <Route exact path="/savednotes" element={<SavedNotes showAlert={showAlert} />} />
              <Route exact path="/login" element={<Login showAlert={showAlert} />} />
              <Route exact path="/signup" element={<SignUp showAlert={showAlert} />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
