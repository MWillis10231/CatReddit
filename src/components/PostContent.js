import Interactions from './Interactions'

export default function PostContent(props) {
    // Sort out the date: This doesn't work but not sure why exactly
    const postDate = new Date(props.data.data.created_utc).toUTCString();
    return(
        <div className="post-content">
            <p>
                Posted by {props.data.data.author}{props.data.data.author_flair_text ? <span className="flair">{props.data.data.author_flair_text}</span> : <span></span>}
                <br></br>
                <time>{postDate}</time>
            </p>
            <header className="post-title">
                <h2>{props.data.data.title}</h2>
                <span className="post-flair">{props.data.data.link_flair_text}</span>
            </header>
            <Interactions data={props.data} />
        </div>
    )
}