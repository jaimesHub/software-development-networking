const UDP = require('dgram');
const process = require('process');

const client = UDP.createSocket('udp4');
const SERVER_PORT = 5000;
const SERVER_HOST_NAME = 'localhost';

client.on('message', (message, remoteServer) => {
    // get the information about server address, port, and size of packet received.
    // console.log('Address: ', info.address, 'Port: ', info.port, 'Size: ', info.size);
    console.log('server info: ', remoteServer);

    //read message from server
    const reponse = JSON.parse(message.toString());

    if (!reponse.address) {
        console.log('message from server: We can not found domain which you want to find!');
    } else {
        console.log('message from server: ', message.toString());
    }
    
    process.exit(1);
});

const packet = Buffer.from(process.argv[2]);

client.send(packet, SERVER_PORT, SERVER_HOST_NAME, (err) => {
    if (err) {
        console.error('Failed to send packet!!!');
    } else {
        console.log('Packet is already sent to server!!!');
    }
});