import express from 'express';
import cors from 'cors';
import { S3 } from 'aws-sdk';

const app = express();
app.use(cors());

const s3 = new S3({
  endpoint: 'https://YOUR_MINIO_HOST:PORT', // e.g. https://minio.example.com:9000
  accessKeyId: 'YOUR_MINIO_ACCESS_KEY',
  secretAccessKey: 'YOUR_MINIO_SECRET_KEY',
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
});

const BUCKET = 'YOUR_BUCKET_NAME';
const ROOT_PREFIX = 'tehilawebsite/עבודות אמנות לאתר תהלה/';

// Get categories (fields)
app.get('/api/categories', async (req, res) => {
  try {
    const params = { Bucket: BUCKET, Prefix: ROOT_PREFIX, Delimiter: '/' };
    const data = await s3.listObjectsV2(params).promise();
    const categories = data.CommonPrefixes.map(p => p.Prefix.replace(ROOT_PREFIX, '').replace('/', ''));
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get projects for a category
app.get('/api/projects', async (req, res) => {
  const { category } = req.query;
  if (!category) return res.status(400).json({ error: 'Missing category' });
  try {
    const prefix = `${ROOT_PREFIX}${category}/`;
    const params = { Bucket: BUCKET, Prefix: prefix, Delimiter: '/' };
    const data = await s3.listObjectsV2(params).promise();
    const projects = data.CommonPrefixes.map(p => p.Prefix.replace(prefix, '').replace('/', ''));
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get images for a project
app.get('/api/images', async (req, res) => {
  const { category, project } = req.query;
  if (!category || !project) return res.status(400).json({ error: 'Missing category or project' });
  try {
    const prefix = `${ROOT_PREFIX}${category}/${project}/`;
    const params = { Bucket: BUCKET, Prefix: prefix };
    const data = await s3.listObjectsV2(params).promise();
    const images = data.Contents
      .filter(obj => !obj.Key.endsWith('/'))
      .map(obj => `${s3.endpoint.href}${BUCKET}/${obj.Key}`);
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`MinIO API server running on http://localhost:${PORT}`);
});
