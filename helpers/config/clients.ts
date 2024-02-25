// 'use client';

// import { createClient, type ClientConfig } from '@sanity/client';
import { type ClientConfig } from '@sanity/client';
import { createClient } from 'next-sanity';

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: '2024-02-23', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
};
const client = createClient(config);
export default client;
