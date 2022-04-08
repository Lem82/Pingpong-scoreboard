import { HubConnectionState } from "@microsoft/signalr";
import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

interface SignalrState {
    readonly state: HubConnectionState;
    readonly connectionDetails: ConnectionDetails;
}

interface ConnectionDetails {
    readonly url: string;
    readonly accessToken: string;
}

const name = "signalr";
const initialState: SignalrState = {
    state: HubConnectionState.Disconnected,
    connectionDetails: {
        url: '',
        accessToken: ''
    }
};

const signalrSlice = createSlice({
    name,
    initialState,
    reducers: {
        setConnectionDetails: (state: Draft<SignalrState>, action: PayloadAction<ConnectionDetails>) => {
            state.connectionDetails = action.payload;
        },
        setConnectionState: (state: Draft<SignalrState>, action: PayloadAction<HubConnectionState>) => {
            state.state = action.payload;
        }
    }
});

export const { setConnectionDetails, setConnectionState } = signalrSlice.actions;
export default signalrSlice.reducer;