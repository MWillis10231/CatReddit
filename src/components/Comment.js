import CommentReplies from './CommentReplies';
import ScoreSmall from './ScoreSmall';
import { convertTime } from './timeConversion'
import { selectBackground } from '../Redux/background/backgroundSlice'
import { useSelector } from 'react-redux';

export default function Comment(props) {
    // Sort out the date - converts the UNIX UTC time to a human-readable date
    const postDate = convertTime(props.data.created_utc, 'short');
    const commentColor = useSelector(selectBackground)
    const commentId = props.data.title
    const authorPage = `https://www.reddit.com/user/${props.data.author}`

    if (props.data.body) {
        return (
            <li className="comment" key={commentId} id={commentId}>
                <div className="comment-container">
                    <ScoreSmall score={props.data.score} />
                    <div className="comment-content">
                        <header style={{backgroundColor: commentColor}}>
                            <p><a href={authorPage} target="_blank" rel="noreferrer">{props.data.author}</a><time>{postDate}</time></p>
                        </header>
                        <div className="comment-body">
                            <p>{props.data.body}</p>
                        </div>
                    </div>
                </div>
                <br></br>
                <ul>
                    <CommentReplies data={props.data}/>
                </ul>
            </li>
        )
    } else {
        return (
            <div></div>
        )
    }
}