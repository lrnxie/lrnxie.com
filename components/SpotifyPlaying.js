import useSWR from "swr";

function SpotifyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-7 h-7 mr-3 fill-[#1D8954]"
    >
      <path d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

async function fetcher(url) {
  return fetch(url).then((res) => res.json());
}

export default function SpotifyPlaying() {
  const { data, error, isLoading } = useSWR("/api/spotify-playing", fetcher);

  return (
    <div className="flex items-center">
      <SpotifyIcon />
      {!isLoading &&
        (!error && data?.isPlaying ? (
          <a
            className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-100"
            href={data.trackUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.title} - {data.artist}
          </a>
        ) : (
          <p className="text-neutral-600 dark:text-neutral-300">Not playing</p>
        ))}
    </div>
  );
}
