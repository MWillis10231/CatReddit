import Interactions from './Interactions'
import { convertTime } from './timeConversion'
import { selectBackground } from '../Redux/background/backgroundSlice'
import { useSelector } from 'react-redux';

export default function PostContent(props) {
    // Sort out the date - converts the UNIX UTC time to a human-readable date
    const postDate = convertTime(props.data.created_utc);
    const flairColor = useSelector(selectBackground)

    return(
        <div className={props.className}>
            <p>
                Posted by <strong>{props.data.author}</strong>
                <br></br>
                <time><em>{postDate}</em></time>
            </p>
            <header className="post-title">
                <h2>{props.data.title}</h2>
                <span className="post-flair" style={{backgroundColor: flairColor}}>{props.data.link_flair_text}</span>
            </header>
            <Interactions data={props.data} id={props.id} comments={props.comments}/>
        </div>
    )
}