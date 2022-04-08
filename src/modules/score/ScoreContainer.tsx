import { useAppSelector } from '../../core/hooks';
import Player from './player/Player';
import './Score.scss';

function ScoreContainer(): JSX.Element {
    const score = useAppSelector(state => state.score);

    return (
        <div id="score-container">
            <div className="left-player">
                <Player player={score.leftPlayer} />
            </div>
            <div className="right-player">
                <Player player={score.rightPlayer} />
            </div>
        </div>
    );
}

export default ScoreContainer;