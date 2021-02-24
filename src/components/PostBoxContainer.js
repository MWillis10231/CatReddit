import PostBox2 from './PostBox2'

export default function PostBoxContainer(props) {
    if (props.isLoading) return "Loading..."
    if (props.error) return `Something went wrong: ${props.error.message}`
    if (props.data) {}
    
    return (
        <main>
            <PostBox2 data={props.data.data.children[0]}/>
            <PostBox2 data={props.data.data.children[1]}/>
            <PostBox2 data={props.data.data.children[2]}/>
            <PostBox2 data={props.data.data.children[3]}/>
            <PostBox2 data={props.data.data.children[4]}/>
            <PostBox2 data={props.data.data.children[5]}/>
            <PostBox2 data={props.data.data.children[6]}/>
            <PostBox2 data={props.data.data.children[7]}/>
            <PostBox2 data={props.data.data.children[8]}/>
            <PostBox2 data={props.data.data.children[9]}/>
            <PostBox2 data={props.data.data.children[10]}/>
            <PostBox2 data={props.data.data.children[11]}/>
            <PostBox2 data={props.data.data.children[12]}/>
        </main>
    )
}
