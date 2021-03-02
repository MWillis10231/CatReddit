import React from 'react'
import ThumbUp from '@material-ui/icons/ThumbUp'
import ThumbDown from '@material-ui/icons/ThumbDown'
import SvgIcon from '@material-ui/core/SvgIcon';

import { selectBackground } from '../Redux/background/backgroundSlice'
import { useSelector } from 'react-redux';

//<img className="vote-small" src={ThumbDown} alt="downvote" />

function ThumbUp2(props) {
    return (
      <SvgIcon {...props}>
        <ThumbUp/>
      </SvgIcon>
    );
  }

  function ThumbDown2(props) {
    return (
      <SvgIcon {...props}>
        <ThumbDown/>
      </SvgIcon>
    );
  }
  

export default function ScoreSmall (props) {
    const flairColor = useSelector(selectBackground)

    if (props.score) {
        return (
        <div className='post-score'>
            <figure>
                <ThumbUp2 style={{ color: flairColor }}/>
            </figure>
            <p className='score'>{props.score}</p>
            <figure>
                <ThumbDown2 style={{ color: flairColor }}/>
            </figure>
        </div>
        )
    } else {
        return (
            <div className='post-score-small'></div>
        )
    }
}
