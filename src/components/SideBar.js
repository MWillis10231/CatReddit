import ColorChange from './ColorChange.js'
import Rules from './Rules.js'

export default function SideBar() {
    return(
        <aside className="sidebar">
            <h2>This is the CatBar</h2>
            <section>
                <h3>About r/cats</h3>   
                <p>Pictures, videos, articles and questions featuring and about cats.
                    <br></br>
                2.6m members. Created April 14, 2008.
                </p>
            </section>
            <ColorChange />
            <Rules />
            <section>
                <h3>Related Communities</h3>
                <p>Subreddits you might also like!</p>
                <ul>
                    <li>
                        <p>r/cat</p> 
                        <p>99, 276 members</p>
                        <button>Join</button>
                    </li>
                    <li>
                        <p>r/blackcats</p> 
                        <p>99, 276 members</p>
                        <button>Join</button>
                    </li>
                </ul>
            </section>
        </aside>
    )
}