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
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-7 h-7 mr-3 fill-neutral-800 dark:fill-neutral-100"
      >
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
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-7 h-7 mr-3 fill-neutral-800 dark:fill-neutral-100"
      >
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
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-7 h-7 mr-3"
      >
        <path
          fill="currentColor"
          d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
        />
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
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-7 h-7 mr-3 fill-[#1C87EB]"
      >
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z" />
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
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-7 h-7 mr-3 fill-neutral-800 dark:fill-neutral-100"
      >
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
