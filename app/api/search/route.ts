import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// Static export: prebuild the search index to a static JSON instead of a
// serverless route. The client runs Orama search against this file.
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source, {
  language: 'english',
});
