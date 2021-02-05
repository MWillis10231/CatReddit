import cat from '../cat-placeholder.jpg'
import React from 'react'

export default function PostBox (props) {
    let picture;
    //if there's no image, load the default cat, otherwise if gif or image load it
    if (props.data.data.post_hint === 'image' ) {
        picture = props.data.data.url;
    } else if (props.data.data.post_hint === 'rich:video') {
        // this is a temp fix for gifs
        picture = props.data.data.thumbnail;
    } else {
        picture = cat;
    }

    // This doesn't work but not sure why exactly
    const postDate = new Date(props.data.data.created_utc).toUTCString();

    return (
        <div className="post-box">
                <figure>
                    <img className="post-image" alt="a cat" src={picture} />
                </figure>
            <div className="post-content">
                <p>Posted by {props.data.data.author}</p>
                <p>{props.data.data.post_hint}</p>
                <p><time>{postDate}</time></p>
                <h2>{props.data.data.title}</h2>
                <p>Up vote {props.data.data.ups}</p>
                <p>{props.data.data.score}</p>
                <p>Down vote {props.data.data.downs}</p>
            </div>
        </div>
    )
}
