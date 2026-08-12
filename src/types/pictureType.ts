import type { Track } from "./trackType";

export interface Picture {
  id: string;
  title: string;
  description?: string | null;
  image_url: string;
  year: number;
  hashtag_id: number | null;
  created_at: string;
  track_id: number | null;
   track: Track | null;
}