import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [printchatboxsum, setprintchatboxsum] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [printchatboxsum1, setprintchatboxsum1] = useState('');
  const [printchatboxsum2, setprintchatboxsum2] = useState('');

  const twoCalls = e => {
    setInput2(e.target.value);
    var temp = parseInt(input1)+parseInt(e.target.value);
    setprintchatboxsum(" = "+temp);
  }
  const addtwonumbers1 = e => {
    setInput3(e.target.value);
    var temp = parseInt(input1)+parseInt(e.target.value);
    setprintchatboxsum1(" = "+temp);
  }
  const addtwonumbers2 = e => {
    setInput4(e.target.value);
    var temp = parseInt(input2)+parseInt(e.target.value);
    setprintchatboxsum2(" = "+temp);
  }
  return (
    <div class="float-container">
        <div class="row">
            <div class="col">
                <div class="float-child box1">
                    <h2 class="green">Calculator 1</h2>
                    <div class="row">
                        <div class="col">
                            <input type='text' name='fname' class='chatinput1' id='chatinput1' value={input1} onChange={e => setInput1(e.target.value)}/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <input type='text' name='fname' class='chatinput2' id='chatinput2' value={input2} onChange={twoCalls}/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="float-child">
                    <h2 class="green">Calculator 2</h2>
                    <div class="row">
                        <div class="col">
                            <p>{input1}</p>
                        </div>
                        <div class="col">
                            <input type='text' name='fname' class='chatinput3' id='chatinput3' value={input3} onChange={addtwonumbers1}/>
                        </div>
                        <div class="col">
                            <p>{printchatboxsum1}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <p>{input2}</p>
                        </div>
                        <div class="col">
                            <input type='text' name='fname' class='chatinput4' id='chatinput4' value={input4} onChange={addtwonumbers2}/>
                        </div>
                        <div class="col">
                            <p>{printchatboxsum2}</p>
                        </div>
                    </div>
                    <p>{printchatboxsum}</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
