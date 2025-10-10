// PopularProductsNavigation.tsx
import React from 'react';
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react';

interface PopularProductsNavigationProps {
  scrollPrev: () => void;
  scrollNext: () => void;
}

const PopularProductsNavigation: React.FC<PopularProductsNavigationProps> = ({ scrollPrev, scrollNext }) => {
  return (
    <div className="flex gap-4">
      <ul className="flex justify-center items-center gap-4 carousel_arrow text-md">
        <li>
         <button
            className="flex justify-center items-center"
            onClick={scrollPrev}
            aria-label="Scroll to previous products"
          >
            <LucideChevronLeft strokeWidth={2} size={30} />
          </button>

        </li>
        <li>
         <button
            className="flex justify-center items-center"
            onClick={scrollNext}
            aria-label="Scroll to next products"
          >
            <LucideChevronRight strokeWidth={2} size={30} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PopularProductsNavigation;
