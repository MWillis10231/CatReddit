import React from "react"

export default function Interactions(props) {
    const isSaved = props.data.data.saved
    const shareURL = `https://embed.redditmedia.com/widgets/embed?url=${props.data.data.url}`

    return(
        <ul className="post-interactions">
            <li><a href={props.data.data.url} target="_blank" rel="noreferrer">Comments</a></li>
            <li className="share-button">Share</li>
            <div className="share-dropdown">
                <a>Copy to clipboard</a>
                <a href={shareURL} target="_blank" rel="noreferrer">Embed</a>
            </div>
            <li>{ isSaved ? <a href="">Saved</a> : <a href="">Save</a>}</li>
            <li><a href="">Hide</a></li>
            <li><a href="">Report</a></li>
        </ul>
    )
}