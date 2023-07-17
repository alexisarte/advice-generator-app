import { useEffect, useState } from 'react';
import Pause from './icons/Pause';
import Die from './icons/Die';

type Advice = {
  slip: {
    id: number;
    advice: string;
  };
};

const Card = () => {
  const [advice, setAdvice] = useState<Advice | null>(null);

  useEffect(() => {
    handleOnclick();
  }, []);

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
    <div className="flex items-center justify-center h-screen bg-dark-blue">
      <div className="flex flex-col items-center justify-evenly p-8 bg-grayish-blue rounded-xl w-full sm:w-[500px] h-60 relative text-center m-4">
        <h1 className="text-neon-green tracking-widest">
          ADVICE #{advice?.slip.id}
        </h1>
        <p className="text-[18px] font-bold">“{advice?.slip.advice}”</p>
        <div className="flex items-center justify-center w-full">
          <div className="bg-white h-[0.5px] w-full flex gap-8"></div>
          <div>
            <Pause />
          </div>
          <div className="bg-white h-[0.5px] w-full flex gap-8"></div>
        </div>
        <div
          className="bg-neon-green h-11 rounded-full w-11 cursor-pointer hover:shadow-[0_0_60px_1px_rgba(0,255,0,0.547)] absolute bottom-0 translate-y-1/2 flex items-center justify-center"
          onClick={handleOnclick}
        >
          <Die />
        </div>
      </div>
    </div>
  );
};

export default Card;
