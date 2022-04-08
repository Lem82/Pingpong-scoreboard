import { HubConnectionState } from "@microsoft/signalr";
import { createContext, useContext, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { createConnection } from "./signalr-utils";
import { setConnectionState } from "./signalrSlice";

interface SignalrProvider {
    sendMessage: Function;
}

const signalrContext = createContext({
    sendMessage: () => { }
} as SignalrProvider);

function SignalrProvider({ children }: any) {
    const dispatch = useAppDispatch();
    const store = useAppSelector(state => state.signalr);

    useEffect(() => {
        if (store.connectionDetails.accessToken && store.connectionDetails.url) {
            createConnection(
                store.connectionDetails.url,
                store.connectionDetails.accessToken
            ).then(connection => {
                connection.start().then(() => {
                    console.info('connection established');
                    dispatch(setConnectionState(HubConnectionState.Connected));
                });
            });
        }
    }, [store.connectionDetails]);

    function sendMessage() {
        console.log("Sending message to hub");
    }

    return (
        <signalrContext.Provider value={{ sendMessage }}>
            {children}
        </signalrContext.Provider>
    );
}

function useSignalr() {
    const context = useContext(signalrContext);


    if (context === undefined) {
        throw new Error("Invalid context");
    }

    return context;
}

export { SignalrProvider, useSignalr };