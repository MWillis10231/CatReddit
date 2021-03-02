import Comment from './Comment';

export default function CommentList(props) {
return (
    <ul className="comment-list">
        {props.data.children.map(comment => (
        <Comment data={comment.data} key={comment.data.id} />))}
    </ul>
    )
}