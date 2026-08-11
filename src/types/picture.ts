export interface Picture {
  id: string;
  title: string;
  description?: string | null;
  image_url: string;
  year: number;
  hashtag: string | null;
  created_at: string;
}