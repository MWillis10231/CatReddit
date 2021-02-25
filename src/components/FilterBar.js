import { useDispatch } from 'react-redux';
import { filterChanged } from '../Redux/postsource/sourceSlice'
import { selectBackground } from '../Redux/background/backgroundSlice'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function FilterBar() {
    const dispatch = useDispatch()
    const buttonTextColor = useSelector(selectBackground)

    const changeFilter = (e) => {
        const filter = e.target.value
        dispatch(filterChanged(filter))
    }

    return (
        <nav>
            <div className="filter">
                <Link to={'/'}><button value='hot' onClick={changeFilter} style={{color: buttonTextColor}}>Hot</button></Link>
                <Link to={'/'}><button value='new' onClick={changeFilter} style={{color: buttonTextColor}}>New</button></Link>
                <Link to={'/'}><button value='top' onClick={changeFilter} style={{color: buttonTextColor}}>Top</button></Link>
                <Link to={'/'}><button value='rising' onClick={changeFilter} style={{color: buttonTextColor}}>Rising</button></Link>
                <form className="search" onChange={changeFilter}>
                    <input type='text' placeholder="Search.." name='search'></input>
                    <button value='search' type='submit' style={{color: buttonTextColor}}>Search</button>
                </form>
                
            </div>
        </nav>
    )
}