import { useAppSelector } from '../../core/hooks';
import './Score.scss';

function ScoreContainer(): JSX.Element {
    const score = useAppSelector(state => state.score);

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