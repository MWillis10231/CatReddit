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
            <h3>Choose a Cat-Colour Theme:</h3>
            <button className="colour-change-button" value='#c8bae3' onClick={changeColor} style={{color: '#c8bae3'}}>
                Panther Purple
            </button>
            <button className="colour-change-button" value='#F4C430' onClick={changeColor} style={{color: '#F4C430'}}>
                Lion Gold
            </button>
            <button className="colour-change-button" value='#FF8C00' onClick={changeColor} style={{color: '#FF8C00'}}>
                Tiger Orange
            </button>
            <button className="colour-change-button" value='#FFFACD' onClick={changeColor} style={{color: '#FFFACD'}}>
                Leopard Yellow
            </button>
        </div>
    )
}
