export function Navs({ href, title, children }) {
  return (
    <li className="group font-medium italic py-3 text-lg">
      <a href={href}>{title}</a>
      {children && (
        <ul className="hidden group-hover:block absolute top-8 bg-sky-50 text-sky-900 p-4 rounded-md shadow-sm transition-all duration-150 ease-out z-20 min-w-44 text-center font-normal">
          {children}
        </ul>
      )}
    </li>
  );
}
