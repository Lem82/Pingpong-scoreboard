import "./Player.scss";
import { PlayerState } from "../scoreSlice";

interface PlayerParams {
    readonly player: PlayerState;
    readonly onScoreChanged: Function;
}

function Player({ player, onScoreChanged }: PlayerParams) {
    return (
        <div className="player">
            <h3>{player.name}</h3>
            <div className="player-score score">{player.score}</div>
            <div className="Buttons">
                <button onClick={() => onScoreChanged(player, 1)} className="up">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <title>circle-up</title>
                        <path d="M0 16c0 8.837 7.163 16 16 16s16-7.163 16-16-7.163-16-16-16-16 7.163-16 16zM29 16c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13 13 5.82 13 13z"></path>
                        <path d="M22.086 20.914l2.829-2.829-8.914-8.914-8.914 8.914 2.828 2.828 6.086-6.086z"></path>
                    </svg>
                </button>
                <button onClick={() => onScoreChanged(player, -1)} className="down">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <title>circle-down</title>
                        <path d="M32 16c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zM3 16c0-7.18 5.82-13 13-13s13 5.82 13 13-5.82 13-13 13-13-5.82-13-13z"></path>
                        <path d="M9.914 11.086l-2.829 2.829 8.914 8.914 8.914-8.914-2.828-2.828-6.086 6.086z"></path>
                    </svg>
                </button>
            </div> 
        </div>
    );
}

export default Player;