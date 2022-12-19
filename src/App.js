import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Calculator1 from './components/calculator1/calculator1';
import Calculator2 from './components/calculator2/calculator2';

function App(props) {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [printchatboxsum, setPrintchatboxsum] = useState('');
  return (
    <div className='row'>
        <div className='col'>
            <Calculator1 inputt1={setInput1} inputt2={setInput2} printchatboxsumm={setPrintchatboxsum}/>
        </div>
        <div className='col'>
            <Calculator2 input1={input1} input2={input2} printchatboxsum={printchatboxsum}/>
        </div>
    </div>
  );
}

export default App;
