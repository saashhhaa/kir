import { supabase } from "../lib/supabase";
import type { Track } from "../types/trackType";
import { getTrackUrl } from "../utils/audio";  // ← добавить эту строку

export async function getTracks(): Promise<Track[]> {
  const { data, error } = await supabase
    .from("tracks")
    .select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return data.map((track) => ({
    ...track,
    file_path: getTrackUrl(track.file_path),
  }));
}
