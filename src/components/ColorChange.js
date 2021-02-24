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
            <button className="colour-change-button" value='#301934' onClick={changeColor}>Panther Purple</button>
            <button className="colour-change-button" value='#F4C430' onClick={changeColor}>Lion Gold</button>
            <button className="colour-change-button" value='#FF8C00' onClick={changeColor}>Tiger Orange</button>
            <button className="colour-change-button" value='#FFFACD' onClick={changeColor}>Leopard Yellow</button>
        </div>
    )
}
