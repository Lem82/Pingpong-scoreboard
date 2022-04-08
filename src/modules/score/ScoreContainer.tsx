import { useAppDispatch, useAppSelector } from '../../core/hooks';
import Player from './player/Player';
import './ScoreContainer.scss';
import { changeScore, PlayerState } from './scoreSlice';

function ScoreContainer(): JSX.Element {
    const score = useAppSelector(state => state.score);
    const dispatch = useAppDispatch();

    function onLeftPlayerScoreChange(player: PlayerState, amount: number) {
        const leftPlayer = {...player, score: player.score + amount};
        dispatch(changeScore({...score, leftPlayer}));
    }

    function onRightPlayerScoreChange(player: PlayerState, amount: number) {
        const rightPlayer = {...player, score: player.score + amount};
        dispatch(changeScore({...score, rightPlayer}));
    }

    return (
        <div id="score-container">
            <div id="players">
                <div className="left-player player">
                    <Player player={score.leftPlayer} onScoreChanged={onLeftPlayerScoreChange} />            
                </div>
                <div className="right-player player">
                    <Player player={score.rightPlayer} onScoreChanged={onRightPlayerScoreChange} />
                </div>
            </div>
        </div>
    );
}

export default ScoreContainer;