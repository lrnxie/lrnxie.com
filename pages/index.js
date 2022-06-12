import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <div className="mb-6">
          <h1 className="text-4xl font-light tracking-wide mb-4">
            Hi, I&rsquo;m{" "}
            <span className="font-bold tracking-normal">Lauren Xie</span>
          </h1>

          <h2 className="text-lg text-gray-700 dark:text-slate-200 mb-7">
            <span className="font-semibold">Web Developer</span> based in
            Toronto, Canada
          </h2>

          <div className="text-gray-600 dark:text-slate-300">
            <p className="font-medium mb-2">🛠 Site is under construction 🛠</p>
            <p>
              In the meantime, feel free to reach out to me via the contacts
              below.
            </p>
          </div>
        </div>

        <div className="text-gray-500 tracking-wide dark:text-slate-400">
          <a
            className="mr-4 hover:text-gray-700 dark:hover:text-slate-300"
            href="https://github.com/lrnxie"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="mr-4 hover:text-gray-700 dark:hover:text-slate-300"
            href="https://twitter.com/lrnxie"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            className="hover:text-gray-700 dark:hover:text-slate-300"
            href="mailto:lrnxie@gmail.com"
          >
            Email
          </a>
        </div>
      </div>
    </Layout>
  );
}
