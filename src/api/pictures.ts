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