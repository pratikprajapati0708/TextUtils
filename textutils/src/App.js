// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode,setmode] = useState('dark');
  const[alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  const togglemode=()=>{
    if(mode === 'light'){
    setmode('dark');
    document.body.style.backgroundColor='grey';
    showAlert("Dark mode enabled","success");
    document.title= "TextUtils - Dark Mode";
    }
  else{
    setmode('light');
    document.body.style.backgroundColor='white';
    showAlert("light mode enabled","success");
    document.title="TextUtils - Light Mode";
  }
}
  return (
    <>
    <Navbar title="TextUtils App" mode={mode} togglemode={togglemode} />
    <div className='container my-3'>
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode}/>
    </div>
    </>
  );
}

export default App;
