import { useAppDispatch, useAppSelector } from '../../core/hooks';
import { useSignalr } from '../../core/signalr/SignalrProvider';
import './Score.scss';
import { changeScore } from './scoreSlice';

function ScoreContainer(): JSX.Element {
    const score = useAppSelector(state => state.score);
    const signalr = useSignalr();
    const dispatch = useAppDispatch();

    console.log(score);

    signalr.sendMessage();

    function addPointToLeftPlayer() {
        console.log('Adding point to left player');
        const leftPlayer = {...score.leftPlayer};
        leftPlayer.score++;
        const data = {...score, leftPlayer};
        dispatch(changeScore(data));
    }

    function addPointToRightPlayer() {
        console.log('Adding point to right player');
        const rightPlayer = {...score.rightPlayer};
        rightPlayer.score++;
        const data = {...score, rightPlayer};
        dispatch(changeScore(data));
    }

    return (
        <div id="score-container">
            <div className="left-player player">
                {score.leftPlayer.name} ({score.leftPlayer.score})
                <button onClick={addPointToLeftPlayer}>Add</button>
            </div>
            <div className="right-player player">
                {score.rightPlayer.name} ({score.rightPlayer.score})
                <button onClick={addPointToRightPlayer}>Add</button>
            </div>
        </div>
    );
}

export default ScoreContainer;