import { HttpTransportType, HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';


export function createConnection(apiUrl: string): HubConnection {
    return new HubConnectionBuilder()
        .configureLogging(LogLevel.Debug)
        .withUrl(apiUrl, {
            skipNegotiation: true,
            transport: HttpTransportType.WebSockets
        })
        .withAutomaticReconnect()
        .build();
}