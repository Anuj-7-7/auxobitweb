// src/lib/mongodb.js
import { MongoClient } from 'mongodb';

let cachedClient = null;

export async function getMongoClient() {
  if (cachedClient) return cachedClient;

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('Missing MONGODB_URI in environment');
  }

  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
}
