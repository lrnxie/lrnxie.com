import type { NextApiRequest, NextApiResponse } from "next";
import { getNowPlaying } from "../../lib/spotify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const data = await response.json();

  const isPlaying = data.is_playing;
  const track = data.item;

  if (!isPlaying || !track) {
    return res.status(200).json({ isPlaying: false });
  }

  const title = track.name;
  const artist = track.artists.map((_artist: any) => _artist.name).join(", ");
  const trackUrl = track.external_urls.spotify;

  return res.status(200).json({
    isPlaying,
    title,
    artist,
    trackUrl,
  });
}
