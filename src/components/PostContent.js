import Interactions from './Interactions'
import convertTime from './timeConversion'

export default function PostContent(props) {
    // Sort out the date - converts the UNIX UTC time to a human-readable date
    const postDate = convertTime(props.data.data.created_utc);

    return(
        <div className="post-content">
            <p>
                Posted by <strong>{props.data.data.author}</strong>
                <br></br>
                <time><em>{postDate}</em></time>
            </p>
            <header className="post-title">
                <h2>{props.data.data.title}</h2>
                <span className="post-flair">{props.data.data.link_flair_text}</span>
            </header>
            <Interactions data={props.data} />
        </div>
    )
}