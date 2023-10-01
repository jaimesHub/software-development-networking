# PROBLEM
```
Implement a simple DNS server:
    - Client creates a socket to DNS server using UDP protocol [x]
    - Server call Redis then response client
        + Key: domain
        + Value: IPv4 address
```

# EXPRESS.JS WITH TYPESCRIPT

- Setup project (Way 1 - 2018): https://dev.to/cristain/how-to-set-up-typescript-with-nodejs-and-express-2023-gf

- Setup project (Way 2 - 2023): https://dev.to/cristain/how-to-set-up-typescript-with-nodejs-and-express-2023-gf


- Problem (with issue): https://stackoverflow.com/questions/71191283/cannot-find-module-ts-transformer-keys-did-you-mean-to-set-the-moduleresolut

- Using Redis with Express.js (Typescript): https://dev.to/ruffiano/using-redis-with-expressjs-typescript-31jn

# Implement the UDP Client with Pure Javascript
- dgram: https://nodejs.org/docs/latest-v19.x/api/dgram.html

- https://bipinparajuli.com.np/blog/create-udp-clinet-and-server-with-node.js

# Implement the UDP Server with Typescript

- https://github.com/hmbanan666/nodejs-dns-server/blob/main/README.md

- https://github.com/angrycoding/mdns-service-discovery/blob/main/dns-server/index.js

- https://github.com/angrycoding/js-local-service-discovery/

# Implement redis database for the UDP Server
- Getting started: https://redis.io/docs/getting-started/
- Installing: https://redis.io/docs/getting-started/installation/install-redis-on-mac-os/
- Redis CLI: https://redis.io/docs/ui/cli/
- Redis Insight: https://redis.io/docs/ui/insight/
- OM for Node.js: https://redis.io/docs/clients/om-clients/stack-node/
- https://developer.redis.com/howtos/quick-start
- `brew services info redis`

# Testing
- [server/src/server.ts] Running server: `npm run dev`
```
Starting seeding data...
Seeding data done!
UDP server listening on  Address:  0.0.0.0 Port:  5000

```

- [client/index.js] Calling command line:
    + `node index.js amazon.com`
    ```
    [Client log]
    Packet is already sent to server!!!
    server info:  { address: '127.0.0.1', family: 'IPv4', port: 5000, size: 49 }
    message from server:  {"domain":"amazon.com","address":"52.94.236.248"}

    [Server log]
    Message from client:  amazon.com
    Client:  { address: '127.0.0.1', family: 'IPv4', port: 61142, size: 10 }
    Response send Successfully!
    ```

    + `node index.js facebook.com`
    ```
    [Client log]
    Packet is already sent to server!!!
    server info:  { address: '127.0.0.1', family: 'IPv4', port: 5000, size: 49 }
    message from server:  {"domain":"facebook.com","address":"31.13.71.36"}

    [Server log]
    Message from client:  facebook.com
    Client:  { address: '127.0.0.1', family: 'IPv4', port: 52720, size: 12 }
    Response send Successfully!
    ```

    + `node index.js google.com`
    ```
    [Client log]
    Packet is already sent to server!!!
    server info:  { address: '127.0.0.1', family: 'IPv4', port: 5000, size: 49 }
    message from server:  {"domain":"google.com","address":"142.251.41.14"}

    [Server log]
    Message from client:  google.com
    Client:  { address: '127.0.0.1', family: 'IPv4', port: 53059, size: 10 }
    Response send Successfully!
    ```

    + `node index.js not-found.com`
    ```
    [Client log]
    Packet is already sent to server!!!
    server info:  { address: '127.0.0.1', family: 'IPv4', port: 5000, size: 41 }
    message from server: We can not found domain which you want to find!

    [Server log]
    Message from client:  not-found.com
    Client:  { address: '127.0.0.1', family: 'IPv4', port: 54378, size: 13 }
    Response send Successfully!
    ```

# What I've done
- Setup an UDP server and a client
- Setup a Redis as a database for UDP server
- Client send message and UDP server responses data from Redis databse

# My struggles
- Some points of export modules happens without reasons, I think I need to check my knowledge about this

# What I'll do next
- Enhance this project
- Implement redis database on docker