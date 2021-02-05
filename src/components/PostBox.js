import cat from '../cat-placeholder.jpg'
// import fetchCatData from './fetchCatData'
import { useAsync } from 'react-async'
import React from 'react'

//'https://www.reddit.com/r/cats.json'

const fetchCatData = async () => {
    await fetch('https://www.reddit.com/r/cats.json')
    .then(response => (response.ok ? response : Promise.reject(response)))
    .then(response => response.json())
    .then(response => {
        console.log(response)
    }) 
}

export default function PostBox () {
    const { data, error, isLoading } = useAsync({ promiseFn: fetchCatData })
    if (isLoading) {
        return (
        "Loading"
        )
    }
    if (error) {
        return (
        `Something went wrong: ${error.message}`
        )
    }
    if (data) {

    }

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
