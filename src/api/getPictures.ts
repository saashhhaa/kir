import { supabase } from "../lib/supabase";

export async function getPictures() {
  const { data, error } = await supabase
    .from("pictures")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data;
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