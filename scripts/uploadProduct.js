require('dotenv').config({ path: '.env.local' });
const { v2: cloudinary } = require('cloudinary');
const { MongoClient }      = require('mongodb');
const path                = require('path');
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//  Upload new product data here:
const NEW_PRODUCT = {
  name:        'Type G',                                              // <-- your product name
  heading:     'Gorgeous Type G',                                     // <-- your heading
  description: 'This is a short description for Type G.',             // <-- your description
  details:     'Additional small detail line.',                       // <-- your small details
  imagePath:   path.resolve(__dirname, 'images/Frame 1265.png'),      // <-- exact local file
};

async function main() {
  console.log('Uploading image to Cloudinary...');
  const uploadRes = await cloudinary.uploader.upload(NEW_PRODUCT.imagePath, {
    folder: 'your-products-folder',    // optional: Cloudinary folder
    use_filename: true,
    unique_filename: false,
  });

  const imageUrl = uploadRes.secure_url;
  console.log('→ Image URL:', imageUrl);

  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db         = client.db(process.env.MONGODB_DB || 'auxobit');
  const products   = db.collection('products');

  const record = {
    name:        NEW_PRODUCT.name,
    heading:     NEW_PRODUCT.heading,
    description: NEW_PRODUCT.description,
    details:     NEW_PRODUCT.details,
    image:       imageUrl,
    createdAt:   new Date(),
  };

  const result = await products.insertOne(record);
  console.log('Inserted product with _id:', result.insertedId);

  await client.close();
}

main().catch((err) => {
  console.error('❌ Error:', err);
  process.exit(1);
});
