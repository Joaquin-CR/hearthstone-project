import Image from 'next/image';
import down from '/public/images/KeyboardArrowDown.svg';
import up from '/public/images/KeyboardArrowUp.svg';
import filterBlack from '/public/images/filterBlack.svg';

export interface IHearthButton {
  sampleTextProp: string;
}

type HearthButtonProps = {
  text: string;
  width: string;
  innerwidth: string;
  color: string;
  image?: string;
  image2?: string;
  funct?: () => void;
  toggle?: boolean;
};

export default function HearthButton({
  text,
  width,
  innerwidth,
  color,
  image,
  image2,
  funct,
  toggle,
}: HearthButtonProps) {
  return (
    <>
      <button
        className={`bg-gradient-to-b p-1  from-gold via-gold_2 via-80% to-gold_3 rounded-full flex flex-col justify-center items-center`}
        onClick={funct}
      >
        <p
          className={`${
            toggle ? 'bg-ColorGold' : 'bg-bgOptions text-white'
          } px-2 text-center max-xl:w-32 h-8 xl:w-40 xl:h-10 rounded-full flex flex-row justify-center gap-1 items-center font-AclonicaR`}
        >
          {image && (
            <Image
              src={toggle ? filterBlack : image}
              alt=""
              width={20}
              height={20}
            ></Image>
          )}
          {text}
          {image2 && (
            <Image
              src={toggle ? up : down}
              alt=""
              width={20}
              height={20}
              className=""
            ></Image>
          )}
        </p>
      </button>
    </>
  );
}
