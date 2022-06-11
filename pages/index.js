import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-50 text-gray-800 px-10 mx-auto">
      <Head>
        <title>Lauren Xie</title>
      </Head>

      <div>
        <div className="mb-6">
          <h1 className="text-4xl font-light tracking-wide mb-4">
            Hi, I'm{" "}
            <span className="font-bold tracking-normal">Lauren Xie</span>
          </h1>
          <h2 className="text-lg text-gray-700 mb-7">
            <span className="font-semibold">Web Developer</span> based in
            Toronto, Canada
          </h2>

          <div className="text-gray-600">
            <p className="font-medium mb-2">🛠 Site is under construction 🛠</p>
            <p>
              In the meantime, feel free to reach out to me via the contacts
              below.
            </p>
          </div>
        </div>

        <div>
          <a
            className="text-gray-400 hover:text-gray-600"
            href="https://github.com/lrnxie"
            target="_blank"
          >
            <FontAwesomeIcon className="mr-6 text-2xl" icon={faGithub} />
          </a>
          <a
            className="text-gray-400 hover:text-gray-600"
            href="https://twitter.com/lrnxie"
            target="_blank"
          >
            <FontAwesomeIcon className="mr-6 text-2xl" icon={faTwitter} />
          </a>
          <a
            className="text-gray-400 hover:text-gray-600"
            href="mailto:lrnxie@gmail.com"
            target="_blank"
          >
            <FontAwesomeIcon className="mr-6 text-2xl" icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  );
}
