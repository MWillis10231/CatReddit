import { v4 as uuidv4 } from 'uuid';

export default function SinglePostContainer(props) {
    let content;
    if (props.data) {
        content = <p>The content should go here</p>
    }
    return (
        <main>
            {content}
        </main>
    )
}