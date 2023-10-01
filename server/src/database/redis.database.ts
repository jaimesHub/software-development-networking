import { createClient } from "redis";

export class RedisClient {
    client: any;
    constructor() {
        this.client = createClient();
    }

    async connectRedis() {
        await this.client.connect();
    }

    async seedingData() {
        console.log('Starting seeding data...');
        await this.client.set('google.com', '142.251.41.14');
        await this.client.set('facebook.com', '31.13.71.36');
        await this.client.set('amazon.com', '52.94.236.248');
        console.log('Seeding data done!');
    }

    async getData(messageKey) {
        try {
            const myKeyValue = await this.client.get(messageKey);
            if (!myKeyValue)
                return null;
            return myKeyValue;
        } catch(e) {
            console.error(e);
        }
    }
}