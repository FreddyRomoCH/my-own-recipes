import { useRef } from "react";
import { CardSlider } from "./CardSlider";
import { LeftArrow, RightArrow } from "./Arrows";

import { categories } from "../../services/categories";

export function CategoriseSlider() {
  const scrollRef = useRef(null);

  const handleClickLeft = () => {
    if (scrollRef.current) {
      if (scrollRef.current.scrollLeft > 0) {
        scrollRef.current.scrollBy({
          left: -200,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollBy({
          left: scrollRef.current.scrollWidth,
          behavior: "smooth",
        });
      }
    }
  };

  const handleClickRight = () => {
    const maxScrollLeft =
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

    if (scrollRef.current) {
      if (scrollRef.current.scrollLeft < maxScrollLeft) {
        scrollRef.current.scrollBy({
          left: 200,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollBy({
          left: -maxScrollLeft,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="relative flex items-center my-5">
      <button onClick={handleClickLeft} className="absolute left-0 z-10">
        <LeftArrow />
      </button>
      <div ref={scrollRef} className="flex overflow-x-hidden animate-carousel">
        <ul className="relative flex flex-row gap-3 [&>li]:min-h-80 [&>li]:w-64">
          {categories.map(({ title, image, href }, index) => (
            <CardSlider key={index} title={title} image={image} href={href} />
          ))}
        </ul>
      </div>
      <button onClick={handleClickRight} className="absolute right-0 z-10">
        <RightArrow />
      </button>
    </div>
  );
}
