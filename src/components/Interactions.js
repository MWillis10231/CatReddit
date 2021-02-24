import React from "react"
import copyURL from './copyClipboard'

export default function Interactions(props) {
    const shareURL = `https://embed.redditmedia.com/widgets/embed?url=${props.data.data.url}`
    const url = props.data.data.url
    let permalink = `https://www.reddit.com/${props.data.data.permalink}`

    return(
        <ul className="post-interactions">
            <li><a href={permalink} target="_blank" rel="noreferrer">Comments</a></li>
            <li><div value={url} id="copy" onClick={copyURL}>Copy</div></li>
            <li><a href={shareURL} target="_blank" rel="noreferrer">Share</a></li>
        </ul>
    )
}