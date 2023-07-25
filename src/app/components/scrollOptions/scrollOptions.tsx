import { useRef } from 'react';
import useDraggableScroll from 'use-draggable-scroll';
type HearthScrollProps = {
  list: Array<string>;
  funct?: () => void;
};

export default function HearthScroll({ list, funct }: HearthScrollProps) {
  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref);

  return (
    <div className="absolute mt-2 bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 h-auto z-10 max-sm:hidden rounded-xl flex flex-col items-center p-1">
      <div
        className="flex flex-col overflow-y-scroll bg-bgColor-CardDescroption max-h-72 text-shadow-lg shadow-black no-scrollbar rounded-xl py-3 mx-4 text-white w-full"
        ref={ref}
        onMouseDown={onMouseDown}
      >
        {list.map((item) => (
          <button
            key={item}
            className=" hover:text-gold text-white text-left px-2 py-1 font-AclonicaR"
            onClick={funct}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
