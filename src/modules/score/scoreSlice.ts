import { createSlice } from "@reduxjs/toolkit";

interface Player {
    readonly name: string;
    readonly score: number;
}

interface ScoreState {
    readonly leftPlayer: Player;
    readonly rightPlayer: Player;
}

const initialState: ScoreState = {
    leftPlayer: {
        name: 'Markku',
        score: 10
    } as Player,
    rightPlayer: {
        name: 'Jani',
        score: 5
    } as Player
};

const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {

    }
});

export default scoreSlice.reducer;