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
  }
  const togglemode=()=>{
    if(mode === 'light'){
    setmode('dark');
    document.body.style.backgroundColor='grey';
    showAlert("Dark mode enabled","success");
    }
  else{
    setmode('light');
    document.body.style.backgroundColor='white';
    showAlert("light mode enabled","success");
  }
}
  return (
    <>
    <Navbar title="TextUtils App" mode={mode} togglemode={togglemode} />
    <div className='container my-3'>
      <Alert alert={alert}/>
    <TextForm heading="Enter the text to analyse"/>
    </div>
    </>
  );
}

export default App;
