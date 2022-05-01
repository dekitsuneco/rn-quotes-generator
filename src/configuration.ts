export const API_URL = 'https://api.quotable.io/random';
export const SHARE_URL = 'https://twitter.com/intent/tweet?text=';
export const LANGUAGE = 'en-US';

export interface APIData {
  _id: string;
  tags: Array<string>,
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}