// app/api/products/route.js
import { getMongoClient } from '@/lib/mongodb';

export async function GET() {
  const client = await getMongoClient();
  const db = client.db('auxobit');
  const products = await db
    .collection('products')
    .find({})
    .sort({ name: 1 })
    .toArray();

  return new Response(JSON.stringify(products), {
    headers: { 'Content-Type': 'application/json' },
  });
}
