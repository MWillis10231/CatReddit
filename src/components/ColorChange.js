import React from 'react';
import { useDispatch } from 'react-redux';
import { updateBackground } from '../features/background/backgroundSlice';


export default function ColorChange() {
    const dispatch = useDispatch();

    return(
        <div className="colour-change">
            <h3>Change the colour!</h3>
            <button value='orange' onClick={e => dispatch(updateBackground(e.target.value))}>Ginger Cat</button>
            <button value='black' onClick={e => dispatch(updateBackground(e.target.value))}>Black Cat</button>
            <button value='goldenrod' onClick={e => dispatch(updateBackground(e.target.value))}>Tabby Cat</button>
        </div>
    )
}
