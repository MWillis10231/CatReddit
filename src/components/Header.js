import logo from '../logo.png';

export default function Header() {
    return(
        <header className='App-header'>
            <img  id="logo" src={logo} alt="The cat reddit logo"/>
            <h1>CatReddit</h1>
        </header>
    )
}

