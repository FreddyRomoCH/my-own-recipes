export function CardSlider({ title, image, href }) {
  return (
    <li className="relative w-[400px] overflow-hidden group" key={title}>
      <a href={href}>
        <h3 className="relative flex z-10 text-sky-950 bg-sky-200/65 justify-center p-2">
          {title}
        </h3>
        <picture>
          <img
            className="absolute top-0 left-0 object-cover w-full h-full group-hover:scale-125 transition-transform duration-1000 linear"
            src={image}
            alt={`${title} recipe`}
          />
        </picture>
      </a>
    </li>
  );
}
