import PostBox from './PostBox'

export default function PostBoxContainer(props) {
    if (props.isLoading) return "Loading..."
    if (props.error !== undefined) return `Something went wrong: ${error.message}`
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
