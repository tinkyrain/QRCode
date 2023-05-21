import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Input.css';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Input = () => {
    const dispatch = useDispatch();
    const { text } = useTypedSelector(state => state.text);
    
    let value:string = '';

    return(
        <input 
            type='text' 
            className="input" 
            placeholder='Enter your text!'
            onChange={(event) =>{
                value = event.target.value;
                dispatch({type: 'GENERATE_QR', qrChange: value});
            }}
            defaultValue={text}
        />
    );
}

export default Input;