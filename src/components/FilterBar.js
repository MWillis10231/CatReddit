import { useDispatch } from 'react-redux';
import { urlChanged } from '../Redux/postsource/sourceSlice'
import { selectBackground } from '../Redux/background/backgroundSlice'
import { useSelector } from 'react-redux';


export default function FilterBar() {
    const dispatch = useDispatch()
    const buttonTextColor = useSelector(selectBackground)

    const changeFilter = (e) => {
        const filter = e.target.value
        dispatch(urlChanged(filter))
    }

    return (
        <nav>
            <div className="filter">
                <button value='hot' onClick={changeFilter} style={{color: buttonTextColor}}>Hot</button>
                <button value='new' onClick={changeFilter} style={{color: buttonTextColor}}>New</button>
                <button value='top' onClick={changeFilter} style={{color: buttonTextColor}}>Top</button>
                <button value='rising' onClick={changeFilter} style={{color: buttonTextColor}}>Rising</button>
                <form className="search" onChange={changeFilter}>
                    <input type='text' placeholder="Search.." name='search'></input>
                    <button value='search' type='submit' style={{color: buttonTextColor}}>Search</button>
                </form>
                
            </div>
        </nav>
    )
}