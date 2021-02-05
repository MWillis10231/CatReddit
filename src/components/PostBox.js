import cat from '../cat-placeholder.jpg'
import React from 'react'

export default function PostBox () {
    return (
        <div className="post-box">
                <figure>
                    <img className="post-image" alt="a cat" src={cat} />
                </figure>
            <div className="post-content">
                <p>Posted by </p>
                <p><time>postTime</time></p>
                <h2>Post Title</h2>
                <p>Up vote postUpVotes</p>
                <p>postScore</p>
                <p>Down vote postDownVotes</p>
            </div>
        </div>
    )
}
