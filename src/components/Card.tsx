import { useState } from 'react';
import DividerMobile from '../assets/images/pattern-divider-mobile.svg';
import DividerDesktop from '../assets/images/pattern-divider-desktop.svg';
import IconDice from '../assets/images/icon-dice.svg';

type Advice = {
  slip: {
    id: number;
    advice: string;
  };
};

const Card = () => {
  const [advice, setAdvice] = useState<Advice | null>({
    slip: {
      id: 117,
      advice:
        "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
    },
  });

  const handleOnclick = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="relative flex flex-col items-center gap-5 p-4 bg-dark-grayish-blue rounded-xl sm:max-w-[500px] text-center m-4">
      <h1 className="text-neon-green tracking-[.25em] mt-8 uppercase">
        advice #{advice?.slip.id}
      </h1>
      <p className="text-[28px] text-center text-light-cyan leading-normal">
        “{advice?.slip.advice}”
      </p>
      <img
        src={window.innerWidth > 768 ? DividerDesktop : DividerMobile}
        alt="divider"
        className="mb-14 mt-2"
      />
      <div
        className="group grid place-items-center bg-neon-green h-16 w-16 rounded-full cursor-pointer hover:shadow-lg absolute bottom-0 translate-y-1/2 transition duration-200 ease-out hover:ease-in"
        onClick={handleOnclick}
      >
        <img
          src={IconDice}
          alt="dice"
          className="group-hover:rotate-180 duration-300"
        />
      </div>
    </div>
  );
};

export default Card;
