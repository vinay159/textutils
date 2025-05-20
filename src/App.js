import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);  
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    }
    
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>  */}
            {/* <Route path="/about" element={<About mode={mode} />}></Route> */}
            {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />}></Route> */}
            <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
