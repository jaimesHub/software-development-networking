import { RedisClient } from './database/redis.database';
import * as UDP from 'dgram';

const server = UDP.createSocket('udp4');
const PORT = 5000;

const newClient = new RedisClient();

server.on('listening', async () => {
    await newClient.connectRedis();
    await newClient.seedingData();

    // Server address it's using to listen
    const addressServer = server.address();

    console.log(
        'UDP server listening on ', 
        'Address: ', addressServer.address, 
        'Port: ', addressServer.port
    );
});

server.on('message', async (msg, receiver) => {
    // response for sending to client
    let response;

    const msgFromClient = msg.toString();
    console.log('Message from client: ', msgFromClient);

    const foundRecord = await newClient.getData(msgFromClient);
    if (!foundRecord) {
        response = {
            domain: msg.toString(),
            address: 'Not found',
        }
    }
    
    response = JSON.stringify({
        domain: msg.toString(),
        address: foundRecord,
    });

    console.log('Client: ', receiver);

    //sending back response to client
    server.send(response, receiver.port, receiver.address, (err) => {
        if (err) {
            console.error('Failed to send response!!');
        } else {
            console.log('Response send Successfully!');
        }
    });
});

server.bind(PORT);