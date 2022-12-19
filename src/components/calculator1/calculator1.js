import React, { useState } from 'react';
import './calculator1.css';

function Calculator1({inputt1, inputt2, printchatboxsumm}) {
    const [i1, setI1] = useState('');
    function oneCall(e) {
        inputt1(e.target.value);
        setI1(e.target.value);
        console.log(i1);
    }
    function twoCalls(e) {
        inputt2(e.target.value);
        console.log(i1);
        var temp = parseInt(i1)+parseInt(e.target.value);
        setI1(temp);
        printchatboxsumm(temp);
    }
    return(
        <div class="row">
            <div class="col">
                <div class="float-child box1">
                    <h2 class="green">Calculator 1</h2>
                    <div class="row">
                        <div class="col">
                            <input type='text' name='fname' class='chatinput1' id='chatinput1' onChange={oneCall}/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <input type='text' name='fname' class='chatinput2' id='chatinput2' onChange={twoCalls}/>
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