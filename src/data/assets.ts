export function getImage(path: string) {
  return `${import.meta.env.BASE_URL}images/${path}`;
}

export function getAudio(path: string) {
  return `${import.meta.env.BASE_URL}audio/${path}`;
}