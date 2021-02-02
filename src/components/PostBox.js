export default function PostBox() {

    const data = [];
    fetch('https://www.reddit.com/r/cats.json', {
        method: 'GET'
        }
    )
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data)
    })
    .catch((error) => {
        console.error('Error:', error)
    });
    
    const postName = data.children[0].data.title;

    return(
        <div className="post-box">
            <figure>
                <img className="post-image" alt="a cat" />
            </figure>
            <div className="post-content">
                <p>{postName}</p>
                <p>Posted by postAuthor</p>
                <p><time>postTime</time></p>
                <h2>postTitle</h2>
                <p>Up vote postUpVotes</p>
                <p>postScore</p>
                <p>Down vote postDownVotes</p>
            </div>
        </div>
    )
}

