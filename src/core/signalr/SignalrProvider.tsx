import { createContext, useContext } from "react";
import { createConnection } from "./signalr-utils";

interface SignalrProvider {
    sendMessage: Function;
}

const signalrContext = createContext({
    sendMessage: () => {}
} as SignalrProvider);

function SignalrProvider({children}: any) {
    /*
    const connection = createConnection("");
    connection.start().then(
        () => console.info("Connection is established")
    ).catch(
        () => console.error("Failed to connect to signalr service")
    );
    */

    function sendMessage() {
        console.log("Sending message to hub");
    }

    return (
        <signalrContext.Provider value={{sendMessage}}>
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

export {SignalrProvider, useSignalr};