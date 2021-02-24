import { useDispatch } from 'react-redux';
import { urlChanged } from '../Redux/postsource/sourceSlice'


export default function FilterBar() {
    const dispatch = useDispatch()

    const changeFilter = (e) => {
        const filter = e.target.value
        dispatch(urlChanged(filter))
    }

    return (
        <nav>
            <div className="filter">
                <button value='hot' onClick={changeFilter}>Hot</button>
                <button value='new' onClick={changeFilter}>New</button>
                <button value='top' onClick={changeFilter}>Top</button>
                <button value='rising' onClick={changeFilter}>Rising</button>
            </div>
        </nav>
    )
}