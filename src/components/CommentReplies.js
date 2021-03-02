import Comment from './Comment'

export default function CommentReplies(props) {
    if (props.data.replies) {
        return (
        props.data.replies.data.children.map(nestedComment => (
            <Comment data={nestedComment.data} key={nestedComment.data.id} />))
        )
    } else {
        return (
            <div></div>
        )
    }
}