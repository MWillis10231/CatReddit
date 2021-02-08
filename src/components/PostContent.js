import Interactions from './Interactions'

export default function PostContent(props) {
    // Sort out the date: This doesn't work but not sure why exactly
    const postDate = new Date(props.data.data.created_utc).toUTCString();
    return(
        <div>
            <p>
                Posted by {props.data.data.author}
                <br></br>
                <time>{postDate}</time>
            </p>
            <h2 className="post-title">{props.data.data.title}</h2><label className="flair" for="flair">{props.data.data.link_flair_text}</label>
            <Interactions data={props.data} />
        </div>
    )
}