import PostBox2 from './PostBox2'
import { v4 as uuidv4 } from 'uuid';

export default function PostBoxContainer(props) {
    let content;
    if (props.data) {
        content = props.data.data.children.map(post => (
            <PostBox2 data={post} id={uuidv4()}/>
        ))
    }
    
    return (
        <main>
            {content}
        </main>
    )
}
