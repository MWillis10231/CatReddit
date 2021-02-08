import cat from '../cat-placeholder.jpg'
import React from 'react'
import Score from './Score.js'
import PostContent from './PostContent'


export default function PostBox (props) {
    let picture;
    //if there's no image on the post, don't load anything, otherwise if gif or image load it. Edge-cases should show a default kitty
    if (props.data.data.media === null && !props.data.data.post_hint && !props.data.data.is_gallery) {
        return (
            <div className="post-box">
                <Score score={props.data.data.score}/>
                <PostContent data={props.data} className="post-content-small" />
            </div>
    )
    } else if (props.data.data.post_hint === 'image' ) {
        picture = props.data.data.url;
        return (
            <div className="post-box">
                <Score score={props.data.data.score}/>
                <figure>
                    <img className="post-image" alt="a cat" src={picture} />
                </figure>
                <PostContent data={props.data} className="post-content" />
            </div>
    )
    } else if (props.data.data.is_gallery) {
        //if it's a gallery of images
        // at the moment render first image. could look at implementing a gallery feature?
        picture = props.data.data.thumbnail;
        return (
            <div className="post-box">
                <Score score={props.data.data.score}/>
                <figure>
                    <img className="post-image" alt="a cat" src={picture} />
                </figure>
                <PostContent data={props.data} className="post-content" />
            </div>
    )
    } else if (props.data.data.post_hint === 'hosted:video') {
        picture = props.data.data.media.reddit_video.fallback_url;
        return (
            <div className="post-box">
                <Score score={props.data.data.score}/>
                <figure>
                    <video className="post-image" autoPlay controls><source src={picture}></source>Your browser does not support the video tag</video>
                </figure>
                <PostContent data={props.data} className="post-content" />
            </div>
    )
    } else if (props.data.data.post_hint === 'rich:video') {
        //richvideo = gifs
        picture = props.data.data.thumbnail;
        return (
            <div className="post-box">
                <Score score={props.data.data.score}/>
                <figure>
                    <video className="post-image" autoPlay controls><source src={picture}></source>Your browser does not support the video tag</video>
                </figure>
                <PostContent data={props.data} className="post-content" />
            </div>
        )
        
    } else {
        picture = cat;
    }

    return (
        <div className="post-box">
            <Score score={props.data.data.score}/>
            <figure>
                <img className="post-image" alt="a cat" src={picture} />
            </figure>
            <PostContent data={props.data} className="post-content" />
        </div>
    )
}
