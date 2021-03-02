import { selectUrl } from '../Redux/postsource/sourceSlice'
import { useSelector } from 'react-redux';
import LoadFail from './LoadFail';
import PostBox2 from './PostBox2';
import CommentList from './CommentList';

export default function SinglePostContainer(props) {
    const url = useSelector(selectUrl);
    let content;
    let comments;

    if (url === "https://www.reddit.com/r/cats.json") {
        content = (<LoadFail/>);
        comments = null;
    } else if (props.data) {
        content = (<PostBox2 data={props.data[0].data.children[0].data} />)
        comments = (<CommentList data={props.data[1].data}/>)
    }

    return (
        <main>
            {content}
            {comments}
        </main>
    )
}