import { supabase } from "../lib/supabase";
import type { Picture } from "../types/pictureType";
import { getTrackUrl } from "../utils/audio";

export async function getPictures(): Promise<Picture[]> {
  const { data, error } = await supabase
    .from("pictures")
    .select(`
      *,
      track:tracks (
        id,
        title,
        artist,
        file_path
      )
    `)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }
console.log("PICTURES FROM SUPABASE:", data);
  return data.map((picture) => ({
    ...picture,
    track: picture.track
      ? {
          ...picture.track,
          file_path: getTrackUrl(picture.track.file_path),
        }
      : null,
  }));
  
}


export function getPreviewUrl(imageUrl: string) {
  const url = new URL(imageUrl);

  url.pathname = url.pathname.replace(
    "/storage/v1/object/public/",
    "/storage/v1/render/image/public/"
  );

  url.searchParams.set("width", "600");
  url.searchParams.set("quality", "70");
  url.searchParams.set("resize", "contain");

  return url.toString();
}
