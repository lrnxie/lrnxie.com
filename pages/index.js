import Layout from "../components/Layout";

export default function Home() {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/lrnxie",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/lrnxie",
    },
  ];
  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold mb-6">Lauren Xie</h1>

        <p className="max-w-xl mb-6">
          {/* Hi, I&rsquo;m Lauren, a{" "} */}
          <span className="font-semibold">Frontend Developer</span> based in
          Toronto 🇨🇦
        </p>

        <div className="flex text-neutral-500 tracking-wide dark:text-neutral-400">
          {links.map((link) => (
            <a
              key={link.name}
              className="mr-4 hover:text-neutral-700 dark:hover:text-neutral-300"
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.name}
            </a>
          ))}

          <a
            className="hover:text-neutral-700 dark:hover:text-neutral-300"
            href="mailto:hello@lrnxie.com"
          >
            Email
          </a>
        </div>
      </div>
    </Layout>
  );
}
