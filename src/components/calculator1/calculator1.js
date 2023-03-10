import React, { useState } from 'react';
import './calculator1.css';

function Calculator1({inputt}) {
    const [i1, setI1] = useState('');

    return(
        <div class="row">
            <div class="col">
                <div class="float-child box1">
                    <h2 class="green">Calculator 1</h2>
                    <div class="row">
                        <div class="col">
                            <input type='text' name='fname' class='chatinput1' id='chatinput1' onChange={e => {inputt({input1: e.target.value}); setI1(e.target.value);}}/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <input type='text' name='fname' class='chatinput2' id='chatinput2' onChange={e => {inputt({input1: i1, input2: e.target.value}); var temp = parseInt(i1)+parseInt(e.target.value); inputt({input1: i1, input2:e.target.value, printchatboxsum: temp}); setI1(temp);}}/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <p className='add'> Addition : {i1}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
      
export default Calculator1;