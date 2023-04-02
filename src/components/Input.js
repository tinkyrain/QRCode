import { useState } from 'react';
import { useDispatch } from 'react-redux';

import './Input.css';

const Input = () => {
    const dispatch = useDispatch();
    let value = null;

    return(
        <input 
            type='text' 
            className="input" 
            placeholder='Enter your text!'
            onChange={(event) =>{
                value = event.target.value;
                dispatch({type: 'GENERATE_QR', qrChange: value});
            }}
        />
    );
}

export default Input;