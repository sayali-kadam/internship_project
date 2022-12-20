import './parent.css';
import React, { useState } from 'react';
import Calculator1 from '../calculator1/calculator1';
import Calculator2 from '../calculator2/calculator2';

function Parent(props) {
    const [input, setInput] = useState({input1:'', input2:'', printchatboxsum1:''});
    
    return (
        <div className='row'>
            <div className='col'>
                <Calculator1 inputt={setInput} />
            </div>
            <div className='col'>
                <Calculator2 input1={input.input1} input2={input.input2} printchatboxsum={input.printchatboxsum}/>
            </div>
        </div>
    );
}

export default Parent;
