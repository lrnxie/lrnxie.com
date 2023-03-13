import Layout from "../components/Layout";
import SpotifyPlaying from "../components/SpotifyPlaying";

export default function Home() {
  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold cursor-default mb-8">Lauren Xie</h1>

        <div className="space-y-4 font-medium cursor-default text-neutral-900 dark:text-neutral-100">
          <Job />
          <Location />
          <GitHub />
          <Twitter />
          <Email />
          <SpotifyPlaying />
        </div>
      </div>
    </Layout>
  );
}

function Wrapper({ children }) {
  return <div className="flex items-center">{children}</div>;
}

function Job() {
  return (
    <Wrapper>
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-7 h-7 mr-3 fill-neutral-800 dark:fill-neutral-100"
      >
        <title>Job</title>
        <path
          fillRule="evenodd"
          d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
          clipRule="evenodd"
        />
        <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
      </svg>

      <p>Frontend Developer</p>
    </Wrapper>
  );
}

function Location() {
  return (
    <Wrapper>
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-7 h-7 mr-3 fill-neutral-800 dark:fill-neutral-100"
      >
        <title>Location</title>
        <path
          fillRule="evenodd"
          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      </svg>

      <p>Toronto 🇨🇦</p>
    </Wrapper>
  );
}

function GitHub() {
  return (
    <Wrapper>
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-7 h-7 mr-3 fill-[#181717] dark:fill-neutral-100"
      >
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>

      <a
        className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-100"
        href="https://github.com/lrnxie"
        target="_blank"
        rel="noopener noreferrer"
      >
        @lrnxie
      </a>
    </Wrapper>
  );
}

function Twitter() {
  return (
    <Wrapper>
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-7 h-7 mr-3 fill-[#1DA1F2]"
      >
        <title>Twitter</title>
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>

      <a
        className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-100"
        href="https://twitter.com/lrnxie"
        target="_blank"
        rel="noopener noreferrer"
      >
        @lrnxie
      </a>
    </Wrapper>
  );
}

function Email() {
  return (
    <Wrapper>
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-7 h-7 mr-3 fill-neutral-800 dark:fill-neutral-100"
      >
        <title>Email</title>
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </svg>

      <a
        className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-100"
        href="mailto:hello@lrnxie.com"
      >
        hello@lrnxie.com
      </a>
    </Wrapper>
  );
}
