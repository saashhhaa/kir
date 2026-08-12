import { supabase } from '../lib/supabase';
import type { Hashtag } from '../types/hashtagType';

export async function getHashtags(): Promise<Hashtag[]> {
  const { data, error } = await supabase
    .from('hashtags')
    .select('*')
    .order('id');

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}