import Comment from './Comment';

export default function CommentList(props) {
if (props.data.children.length === 0) {
    return (
        <ul className="comment-list">
            <li style={{listStyleType: 'none'}}>No-one has posted any replies to this thread!</li>
        </ul>
    )
    } else if (props.data.children) {
    return (
        <ul className="comment-list">
            {props.data.children.map(comment => (
            <Comment data={comment.data} key={comment.data.id} />))}
        </ul>
    )
    }
}