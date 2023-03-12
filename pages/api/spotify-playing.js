import { getNowPlaying } from "../../lib/spotify";

export default async function handler(req, res) {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const data = await response.json();

  const isPlaying = data.is_playing;

  if (!isPlaying) {
    return res.status(200).json({ isPlaying: false });
  }

  const track = data.item;
  const title = track.name;
  const artist = track.artists.map((_artist) => _artist.name).join(", ");
  const trackUrl = track.external_urls.spotify;

  return res.status(200).json({
    isPlaying,
    title,
    artist,
    trackUrl,
  });
}
