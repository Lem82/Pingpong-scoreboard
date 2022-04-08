import { createSlice, current, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface PlayerState {
    readonly name: string;
    score: number;
}

interface ScoreState {
    readonly leftPlayer: PlayerState;
    readonly rightPlayer: PlayerState;
}

const initialState: ScoreState = {
    leftPlayer: {
        name: 'Player 1',
        score: 10
    } as PlayerState,
    rightPlayer: {
        name: 'Player 2',
        score: 5
    } as PlayerState
};

const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        changeScore(state: Draft<ScoreState>, action: PayloadAction<ScoreState>) {
            console.log(action);
            state.leftPlayer = action.payload.leftPlayer;
            state.rightPlayer = action.payload.rightPlayer;

            console.log(current(state));
        }
    }
});

export const { changeScore } = scoreSlice.actions;
export default scoreSlice.reducer;