import React from "react"
import { selectBackground } from '../Redux/background/backgroundSlice'
import { useSelector } from 'react-redux';

export default function Interactions(props) {
    const shareURL = `https://embed.redditmedia.com/widgets/embed?url=${props.data.data.url}`
    const url = props.data.data.url
    let permalink = `https://www.reddit.com/${props.data.data.permalink}`
    const buttonColor = useSelector(selectBackground)
    
    return(
        <ul className="post-interactions">
            <li style={{backgroundColor: buttonColor}}><a href={permalink} target="_blank" rel="noreferrer">Comments</a></li>
            <li className="drop-down" style={{backgroundColor: buttonColor}}>
                <div className="drop-down-button" >Copy</div>
                <div className="drop-down-content">
                    <input type="text" value={url} id={url} style={{backgroundColor: buttonColor}}></input>
                    <button style={{backgroundColor: buttonColor}}>Copy URL</button>
                </div>
            </li>
            <li style={{backgroundColor: buttonColor}}><a href={shareURL} target="_blank" rel="noreferrer">Share</a></li>
        </ul>
    )
}