import { useState } from 'react';
import './Input.css';

const Input = () => {
    let value:string = '';

    return(
        <input 
            type='text' 
            className="input" 
            placeholder='Enter your text!'
            onChange={(event) =>{
                value = event.target.value;
            }}
            defaultValue='https://github.com/tinkyrain'
        />
    );
}

export default Input;