import { useAppSelector } from '../../core/hooks';
import './Header.scss';
import logo from './logo.svg';

function Header() {
    const connectionState = useAppSelector(state => state.signalr.state);
    console.log('connectionState', connectionState);

    return (
        <header>
            <img src={logo} />
            <h1>Ping Pong Score Board</h1>
        </header>
    );
}

export default Header;