export default function ListItem({ icon, link, title, newTab = true }) {
  return (
    <div className="flex items-center">
      <div className="flex-none w-7 h-7 mr-3 fill-neutral-800 dark:fill-neutral-100">
        {icon}
      </div>

      <div className="flex-1 truncate text-neutral-900 dark:text-neutral-100">
        {link ? (
          <a
            className="font-semibold border-b border-indigo-500 hover:border-b-2 transition-all ease-in-out duration-100"
            href={link}
            target={newTab ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            {title}
          </a>
        ) : (
          <p className="font-medium cursor-default">{title}</p>
        )}
      </div>
    </div>
  );
}
