import React from "react"
import { selectBackground } from '../Redux/background/backgroundSlice'
import { useDispatch, useSelector } from 'react-redux';
import { urlChanged } from '../Redux/postsource/sourceSlice';
import { Link } from 'react-router-dom'

export default function Interactions(props) {
    const shareURL = `https://embed.redditmedia.com/widgets/embed?url=${props.data.data.url}`
    const url = props.data.data.url
    const permaLink = props.data.data.permalink;
    const fixedLink = permaLink.slice(0, -1);
    
    const buttonColor = useSelector(selectBackground)

    const dispatch = useDispatch()
    const changeUrl = (e) => {
        const comments = e.target.value
        dispatch(urlChanged(comments))
    }
    
    return(
        <ul className="post-interactions">
            <li style={{backgroundColor: buttonColor}}><Link to={`/${props.id}`} value={fixedLink}>Comments</Link></li>
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