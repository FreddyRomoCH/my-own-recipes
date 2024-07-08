export function Navs({ href, title, children }) {
  return (
    <li className="group font-semibold py-3">
      <a href={href}>{title}</a>
      {children && (
        <ul className="hidden group-hover:block absolute top-8 bg-sky-200 p-4 rounded-md shadow-sm transition-all duration-150 ease-out">
          {children}
        </ul>
      )}
    </li>
  );
}
