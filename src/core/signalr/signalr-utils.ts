import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import axios from 'axios';

interface ConnectionDetails {
    readonly url: string;
    readonly accessToken: string;
}

const detailsUrl = "https://pingpongconnapp.azurewebsites.net/api/negotiate";
export async function loadConnectionDetails(): Promise<ConnectionDetails> {
    const config = {
        headers: { 'Access-Control-Allow-Origin': '*' }
    };
    return axios.get(detailsUrl, config).then(response => response.data);
}

export async function createConnection(apiUrl: string, accessToken: string): Promise<HubConnection> {
    return new HubConnectionBuilder().withUrl(apiUrl, { accessTokenFactory: () => accessToken }).build();
}