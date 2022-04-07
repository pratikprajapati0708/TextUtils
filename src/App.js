// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
// import About from './components/About';
// import { Routes } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('dark');
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
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils App" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        {/* <Routes>
            <Route exact path="/about">
              <About /> */}
        {/* </Route>
            <Route exact path="/"> */}
        <TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode} />
        {/* </Route>
          </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
