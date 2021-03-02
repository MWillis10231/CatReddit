import cat from '../logo.png'

export default function Loading() {
    return (
        <div className="post-box-loading">
            <div className="loader">
                <p className="load-text">Loading...</p>
                <img className="load-image" alt="a cat" src={cat} />
            </div>
        </div>
    )
}