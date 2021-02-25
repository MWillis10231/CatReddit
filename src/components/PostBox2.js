import cat from '../cat-placeholder.jpg'
import React from 'react'
import Score from './Score.js'
import PostContent from './PostContent'
import { selectBackground } from '../Redux/background/backgroundSlice'
import { useSelector } from 'react-redux';

export default function PostBox (props) {
    const overlayColor = useSelector(selectBackground)
    let permalink = `https://www.reddit.com/${props.data.data.permalink}`
    let picture;
    let postContent;
    let pictureContent;

    if (props.data.data.media === null && !props.data.data.post_hint && !props.data.data.is_gallery) {
        postContent = <PostContent data={props.data} className="post-content-small" />
        pictureContent = null;
    } else {
        postContent = <PostContent data={props.data}/>
    }
    // if it's an image, set picture accordingly
    if (props.data.data.post_hint === 'image' ) {
        picture = props.data.data.url;
        pictureContent = (
            <figure className="post-media-container">
                <a href={permalink} target="_blank" rel="noreferrer">  
                    <img className="post-image" alt="a cat" src={picture} />
                </a>
            </figure>
            )
    // if gallery doesn't have a thumbnail display default kitty
    } else if (props.data.data.is_gallery && props.data.data.thumbnail === 'default') {
        pictureContent = (
            <figure className="post-media-container">
                <a href={permalink}>  
                    <img className="post-image-default" alt="a cat" src={cat} />
                    <figcaption className="default-image-text" style={{backgroundColor: overlayColor}}><em>Image not found</em></figcaption>
                </a>
            </figure>
        )
    // for gallerys return first image if possible
    } else if (props.data.data.is_gallery) {   
        picture = props.data.data.thumbnail;
        pictureContent = (
            <figure className="post-media-container">
                <a href={permalink} target="_blank" rel="noreferrer">  
                    <img className="post-image" alt="a cat" src={picture} />
                </a>
            </figure>
        )
    // return videos correctly
    } else if (props.data.data.post_hint === 'hosted:video') {
        picture = props.data.data.media.reddit_video.fallback_url;
        pictureContent = (
            <figure className="post-media-container">
                <video className="post-video" autoPlay controls><source src={picture}></source>Your browser does not support the video tag</video>
            </figure>
        )
    // return gifs correctly
    } else if (props.data.data.post_hint === 'rich:video') {
        picture = props.data.data.thumbnail;
        pictureContent = (
            <figure className="post-media-container">
                <video className="post-video" autoPlay controls><source src={picture}></source>Your browser does not support the video tag</video>
            </figure>
        )
    // otherwise return default kitty just in case
    } else {
        <figure className="post-media-container">
            <a href={permalink} target="_blank" rel="noreferrer">
                <img className="post-image-default" alt="a cat" src={cat} />
                <figcaption className="default-image-text" style={{backgroundColor: overlayColor}}><em>Image not found</em></figcaption>
            </a>
        </figure>
    }


    // return all cases
    return (
        <div className="post-box">
            <Score score={props.data.data.score}/>
            {pictureContent}
            {postContent}
        </div>
    )
}