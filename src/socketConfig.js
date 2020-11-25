import openSocket from 'socket.io-client';
const ENDPOINT = "localhost:3001";
const socket = openSocket(ENDPOINT);
export default socket;