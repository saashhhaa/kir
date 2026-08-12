import { supabase } from "../lib/supabase";

export function getTrackUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const { data } = supabase.storage.from("tracks").getPublicUrl(path);
  return data.publicUrl;
}