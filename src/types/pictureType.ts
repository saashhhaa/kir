
export interface Picture {
  title?: string | null;
  description?: string | null;
  image_url: string;
  year?: number | null;
  hashtag_id?: number | null;
  track_id?: number | null;
  collection_id?: number | null;
}