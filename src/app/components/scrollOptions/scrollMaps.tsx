'use client';
import { useRef } from 'react';
import useDraggableScroll from 'use-draggable-scroll';

type MapsScrollProps = {
  list?: Array<string>;
  funct?: (item: any) => void;
};

export default function ScrollMaps() {
  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref);
  return (
    <div
      // hidden
      className="w-full fixed top-20 z-10 md:flex flex-col overflow-y-scroll text-shadow-lg bg-cover bg-blue-950 bg-bgSideShop shadow-black no-scrollbar py-3 text-white md:w-1/4 h-screen"
      ref={ref}
      onMouseDown={onMouseDown}
    >
      <div className="">
        <button>Test</button>
      </div>
    </div>
  );
}
