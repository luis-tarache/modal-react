//import './App.css';
import React, {useState} from 'react';
import Modal from './Modal';

function App() {

    const [opeModal, setOpenModal] = useState(false)

  return (
    <div className="App">
      <button className='modalBtn' onClick={()=>setOpenModal(!opeModal)}>Modal</button>
      <Modal open={opeModal} onClose={()=>setOpenModal(!opeModal)}/>
    </div>
  );
}

export default App;
