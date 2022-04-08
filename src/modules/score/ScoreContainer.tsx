import { useAppSelector } from '../../core/hooks';
import { useSignalr } from '../../core/signalr/SignalrProvider';
import './Score.scss';

function ScoreContainer(): JSX.Element {
    const score = useAppSelector(state => state.score);
    const signalr = useSignalr();

    signalr.sendMessage();

    return (
        <div id="score-container">
            <div className="left-player player">
                {score.leftPlayer.name}
            </div>
            <div className="right-player player">
                {score.rightPlayer.name}
            </div>
        </div>
    );
}

export default ScoreContainer;