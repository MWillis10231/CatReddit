import { useDispatch, useSelector } from 'react-redux'
import cat from '../logo.png'
import { fetchCatData, selectUrl } from '../Redux/postsource/sourceSlice'
import { selectBackground } from '../Redux/background/backgroundSlice'

export default function LoadFail() {
  const error = useSelector(state => state.source.error)
  const background = useSelector(selectBackground)
  const dispatch = useDispatch();
  const url = useSelector(selectUrl);

  let errorMessage

  if (error) {
    errorMessage = error
  } else {
    errorMessage = 'Sorry - something seems to have gone wrong.'
  }

  return (
    <div className="post-box-loading">
      <div className="loader">
        <p className="load-text">{errorMessage}</p>
        <button type="button" onClick={() => dispatch(fetchCatData(url))} style={{color: background}}>Reload Posts</button>
        <figure>
          <img className="fail-image" alt="a cat" src={cat} />
        </figure>
        <button type="button" onClick={() => window.location.reload()} style={{color: background}}>Reload Page</button>
      </div>
    </div>
  )
}