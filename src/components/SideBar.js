import ColorChange from './ColorChange.js'
import Rules from './Rules.js'

export default function SideBar() {
    return(
        <aside className="sidebar">
            <h2>CatSideBar</h2>
            <section>
                <h3>About r/cats</h3>   
                <p>Pictures, videos, articles and questions featuring and about cats.
                    <br></br>
                2.6m members. Created April 14, 2008.
                </p>
            </section>
            <ColorChange />
            <Rules />
        </aside>
    )
}