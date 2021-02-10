import React from 'react';
import { useDispatch } from 'react-redux';
import { backgroundChanged } from '../Redux/background/backgroundSlice';

export default function ColorChange() {
    const dispatch = useDispatch()

    const changeColor = (e) => {
        const color = e.target.value
        dispatch(backgroundChanged(color))
    }

    return(
        <div className="colour-change">
            <h3>Change the colour!</h3>
            <button value='orange' onClick={changeColor}>Ginger Cat</button>
            <button value='black' onClick={changeColor}>Black Cat</button>
            <button value='goldenrod' onClick={changeColor}>Tabby Cat</button>
        </div>
    )
}
