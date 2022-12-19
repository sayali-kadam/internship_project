import React, { useState } from 'react';
import './calculator2.css';

function Calculator2({input1, input2, printchatboxsum}) {

    const [input, setInput] = useState({input3:'', inpu4:'', input5:'', printchatboxsum1:'', printchatboxsum2:'', printchatboxsum3:''});

    const addtwonumbers1 = e => {
        setInput({input3: e.target.value});
        var temp = Number(input1)+parseInt(e.target.value);
        setInput({printchatboxsum1: temp});
    }
    const addtwonumbers2 = e => {
        setInput({input4: e.target.value});
        var temp = Number(input2)+parseInt(e.target.value);
        setInput({printchatboxsum2: temp});
    }
    const addtwonumbers3 = e => {
        setInput({input5: e.target.value});
        var temp = Number(printchatboxsum)+parseInt(e.target.value);
        setInput({printchatboxsum3: temp});
    }
    return(
        <div>
            <div class="col">
                <div class="float-child">
                    <h2 class="green">Calculator 2</h2>
                    <div class="row">
                        <div class="col">
                            <p>{input1} + </p>
                        </div>
                        <div class="col">
                            <input type='text' name='fname' class='chatinput3' id='chatinput3' value={input.input3} onChange={addtwonumbers1}/>
                        </div>
                        <div class="col">
                            <p> = {input.printchatboxsum1}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <p>{input2} + </p>
                        </div>
                        <div class="col">
                            <input type='text' name='fname' class='chatinput4' id='chatinput4' value={input.input4} onChange={addtwonumbers2}/>
                        </div>
                        <div class="col">
                            <p> = {input.printchatboxsum2}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <p>{printchatboxsum} + </p>
                        </div>
                        <div class="col">
                            <input type='text' name='fname' class='chatinput5' id='chatinput5' value={input.input5} onChange={addtwonumbers3}/>
                        </div>
                        <div class="col">
                            <p> = {input.printchatboxsum3}</p>
                        </div>
                    </div>
                    {/* <p>{printchatboxsum}</p> */}
                </div>
            </div>
        </div>
    )
  
}
export default Calculator2;