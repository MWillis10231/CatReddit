import React from "react"
import copyURL from './copyClipboard'

export default function Interactions(props) {
    const shareURL = `https://embed.redditmedia.com/widgets/embed?url=${props.data.data.url}`
    const url = props.data.data.url
    let permalink = `https://www.reddit.com/${props.data.data.permalink}`

    return(
        <ul className="post-interactions">
            <li><a href={permalink} target="_blank" rel="noreferrer">Comments</a></li>
            <li className="drop-down">
                <div className="drop-down-button" value={url} id="copy">Copy</div>
                <div className="drop-down-content">
                    <input type="text" value={url} id="url"></input>
                    <button>Copy URL</button>
                </div>
            </li>
            <li><a href={shareURL} target="_blank" rel="noreferrer">Share</a></li>
        </ul>
    )
}