import PostBox2 from './PostBox2'
import { v4 as uuidv4 } from 'uuid';

export default function PostBoxContainer(props) {
    let content;
    
    if (props.data) {
        let comments = props.comments
        content = props.data.data.children.map(post => (
            <PostBox2 data={post.data} id={uuidv4()} key={uuidv4()} comments={comments}/>
        ))
    }
    
    return (
        <main>
            {content}
        </main>
    )
}
