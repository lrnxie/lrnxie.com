export default function ListItem({ icon, link, title, newTab = true }) {
  return (
    <div className="flex items-center">
      <div className="w-7 h-7 mr-3 fill-neutral-800 dark:fill-neutral-100">
        {icon}
      </div>

      {link ? (
        <a
          className="font-semibold border-b-2 border-indigo-500 hover:border-indigo-200 hover:dark:border-indigo-700 transition-colors ease-in-out duration-200"
          href={link}
          target={newTab ? "_blank" : "_self"}
          rel="noopener noreferrer"
        >
          {title}
        </a>
      ) : (
        <p>{title}</p>
      )}
    </div>
  );
}
