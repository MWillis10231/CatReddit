import PostBox from './PostBox'

export default function PostBoxContainer(props) {
    if (props.isLoading) return "Loading..."
    if (props.error) return `Something went wrong: ${props.error.message}`
    if (props.data) {}
    
    return (
        <main>
            <p></p>
            <PostBox />
            <PostBox />
            <PostBox />
        </main>
    )
}
