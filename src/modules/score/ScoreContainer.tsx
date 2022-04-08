import { useAppSelector } from '../../core/hooks';
import Player from './player/Player';
import './Score.scss';

function ScoreContainer(): JSX.Element {
    const score = useAppSelector(state => state.score);

    return (
        <div id="score-container">
            <div id="players">
                <div className="left-player player">
                    {score.leftPlayer.name}            
                </div>
                <div className="right-player player">
                    {score.rightPlayer.name}
                </div>
            </div>
            <div id="score-board">
                <div className="left-score score">
                    {score.leftPlayer.score}            
                </div>
                <div className="right-score score">
                    {score.rightPlayer.score}
                </div>
            </div>
        </div>
    );
}

export default ScoreContainer;