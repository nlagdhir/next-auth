import { MongoClient } from "mongodb"

export const connectToDatabase = () => {

    const URL = 'mongodb+srv://nilesh:nilesh123@next-auth.ikgevrf.mongodb.net/?retryWrites=true&w=majority';
    const mongoClient = new MongoClient(URL);
    const client = mongoClient.connect();

    return client;
}

