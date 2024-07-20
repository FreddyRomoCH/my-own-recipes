import { useRef } from "react";
import { CardSlider } from "./CardSlider";
import { LeftArrow, RightArrow } from "./Arrows";
import { useGetCategories } from "../../hooks/useCategories.js";

export function CategoriesSlider() {
  const scrollRef = useRef();
  const { listCategorties } = useGetCategories();

  return (
    <div className="relative flex items-center my-8 justify-center">
      {listCategorties.length > 0 && (
        <>
          <LeftArrow ref={scrollRef} />

          <div
            ref={scrollRef}
            className="flex overflow-x-hidden animate-carousel"
          >
            <ul className="relative flex flex-row gap-3 [&>li]:min-h-80 [&>li]:w-64">
              {listCategorties.map(({ title, image, href }) => (
                <CardSlider
                  key={title}
                  title={title}
                  image={image}
                  href={href}
                />
              ))}
            </ul>
          </div>

          <RightArrow ref={scrollRef} />
        </>
      )}
    </div>
  );
}
