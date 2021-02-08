import downvote from '../downvote-paw.png'
import upvote from '../upvote-paw.png'
import React from 'react'

export default function Score (props) {
    return (
        <div className='post-score'>
            <figure>
                <img className="vote" src={upvote} alt="upvote" />
            </figure>
            <p className='score'>{props.score}</p>
            <figure>
                <img className="vote" src={downvote} alt="downvote" />
            </figure>
        </div>

    )
}