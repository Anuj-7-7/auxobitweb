// scripts/uploadProducts.js

// 1. Load env vars from .env.local
require('dotenv').config({ path: '.env.local' });

const { v2: cloudinary } = require('cloudinary');
const { MongoClient }     = require('mongodb');
const path                = require('path');

// 2. Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 3. Define all products you want to upload
//    Make sure you have the corresponding files in scripts/images/
const PRODUCTS = [
  { name: 'Type A', heading: 'Amazing Type A', description: 'Short desc for A', details: 'Detail A', file: 'Frame 1268.png' },
  { name: 'Type B', heading: 'Brilliant Type B', description: 'Short desc for B', details: 'Detail B', file: 'Frame 1276.png' },
  { name: 'Type C', heading: 'Classic Type C',  description: 'Short desc for C', details: 'Detail C', file: 'Frame 1265.png' },
  { name: 'Type D', heading: 'Deluxe Type D',   description: 'Short desc for D', details: 'Detail D', file: 'Frame 1342.png' },
  { name: 'Type E', heading: 'Excellent Type E', description: 'Short desc for E', details: 'Detail E', file: 'Frame 1268.png' },
  { name: 'Type F', heading: 'Fantastic Type F', description: 'Short desc for F', details: 'Detail F', file: 'Frame 1276.png' },
];

async function main() {
  // 4. Connect to MongoDB
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db       = client.db(process.env.MONGODB_DB || 'auxobit');
  const coll     = db.collection('products');

  // 5. Clean slate: remove all existing docs
  console.log('Clearing existing products collection…');
  await coll.deleteMany({});

  // 6. Loop & upload
  for (const prod of PRODUCTS) {
    const localPath = path.resolve(__dirname, 'images', prod.file);
    console.log(`\nUploading "${prod.file}" to Cloudinary…`);
    const uploadRes = await cloudinary.uploader.upload(localPath, {
      folder: 'your-products-folder',
      use_filename: true,
      unique_filename: false,
    });

    const imageUrl = uploadRes.secure_url;
    console.log('→ Image URL:', imageUrl);

    // 7. Insert into MongoDB
    const record = {
      name:        prod.name,
      heading:     prod.heading,
      description: prod.description,
      details:     prod.details,
      image:       imageUrl,
      createdAt:   new Date(),
    };

    const { insertedId } = await coll.insertOne(record);
    console.log(`Inserted "${prod.name}" with _id: ${insertedId}`);
  }

  // 8. Cleanup
  await client.close();
  console.log('\n✅ All products uploaded! Your mini‑grid will now render Cloudinary‑hosted images.');
}

main().catch((err) => {
  console.error('❌ Fatal error:', err);
  process.exit(1);
});
