import PostBox2 from './PostBox2'
import { v4 as uuidv4 } from 'uuid';

export default function PostBoxContainer(props) {
    let content;
    
    if (props.data) {
        let uniqueId = uuidv4();
        let comments = props.comments
        content = props.data.data.children.map(post => (
            <PostBox2 data={post.data} id={uniqueId} key={uniqueId} comments={comments}/>
        ))
    }
    
    return (
        <main>
            {content}
        </main>
    )
}
