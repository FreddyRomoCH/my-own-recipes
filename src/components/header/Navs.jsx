export function Navs({ href, title, children, id }) {
  return (
    <li className="group font-normal italic py-3 text-lg" key={id}>
      <a href={href}>{title}</a>
      {children && (
        <ul className="hidden group-hover:block absolute top-8 bg-sky-200 p-4 rounded-md shadow-sm transition-all duration-150 ease-out z-20">
          {children}
        </ul>
      )}
    </li>
  );
}
