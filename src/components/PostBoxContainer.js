import PostBox from './PostBox'

export default function PostBoxContainer(props) {
    if (props.isLoading) return "Loading..."
    if (props.error) return `Something went wrong: ${props.error.message}`
    if (props.data) {}
    
    return (
        <main>
            <PostBox data={props.data.data.children[0]}/>
            <PostBox data={props.data.data.children[1]}/>
            <PostBox data={props.data.data.children[2]}/>
            <PostBox data={props.data.data.children[3]}/>
            <PostBox data={props.data.data.children[4]}/>
            <PostBox data={props.data.data.children[5]}/>
            <PostBox data={props.data.data.children[6]}/>
            <PostBox data={props.data.data.children[7]}/>
            <PostBox data={props.data.data.children[8]}/>
            <PostBox data={props.data.data.children[9]}/>
            <PostBox data={props.data.data.children[10]}/>
            <PostBox data={props.data.data.children[11]}/>
            <PostBox data={props.data.data.children[12]}/>
        </main>
    )
}
