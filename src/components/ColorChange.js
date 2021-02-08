export default function ColorChange(props) {
    function changeBackground(event) {
        props.onClick(event.target.value)
    }

    return(
        <div className="colour-change">
            <h3>Change the colour!</h3>
            <button value='orange' onClick={changeBackground}>Ginger Cat</button>
            <button value='black' onClick={changeBackground}>Black Cat</button>
            <button value='goldenrod' onClick={changeBackground}>Tabby Cat</button>
        </div>
    )
}