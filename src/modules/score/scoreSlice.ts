import { createSlice, current, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface PlayerState {
    readonly name: string;
    readonly score: number;
}

interface ScoreState {
    readonly leftPlayer: PlayerState;
    readonly rightPlayer: PlayerState;
}

const initialState: ScoreState = {
    leftPlayer: {
        name: 'Markku',
        score: 10
    } as PlayerState,
    rightPlayer: {
        name: 'Jani',
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