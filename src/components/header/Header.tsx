import './Header.scss';
import logo from './logo.svg';

function Header() {
    return (
    <header>
        <img src={logo} />
        <h1>Ping Pong Score Board</h1>
    </header>
    );
}

export default Header;