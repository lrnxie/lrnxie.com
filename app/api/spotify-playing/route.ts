import { getNowPlaying } from '@/lib/spotify';

export const revalidate = 60;

export async function GET() {
  const nowPlayingResponse = await getNowPlaying();

  if (nowPlayingResponse.status === 204 || nowPlayingResponse.status > 400) {
    return Response.json({ isPlaying: false });
  }

  const data = await nowPlayingResponse.json();
  const isPlaying = data.is_playing;
  const track = data.item;

  if (!isPlaying || !track) {
    return Response.json({ isPlaying: false });
  }

  return Response.json({
    isPlaying: true,
    title: track.name,
    artist: track.artists.map((_artist: any) => _artist.name).join(', '),
    url: track.external_urls.spotify,
    albumImage:
      track.album.images.find((image: any) => image.width === 300)?.url ||
      track.album.images[0].url,
  });
}
