import { useState } from 'react';

type Advice = {
  slip: {
    id: number;
    advice: string;
  };
};

const Card = () => {
  const [advice, setAdvice] = useState<Advice | null>(null);

  const handleOnclick = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data);
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-dark-blue text-center">
      <div className="bg-grayish-blue p-4 rounded-xl md:w-1/4 w-full m-4">
        <h1 className="text-neon-green">ADVICE #{advice?.slip.id}</h1>
        <p className="text[28px]">"{advice?.slip.advice}"</p>
        <div className="bg-white h-[0.5px]"></div>
        <button
          className="bg-neon-green h-11 rounded-full w-11 hover:shadow-[0_0_60px_1px_rgba(0,255,0,0.547)] m-4"
          onClick={handleOnclick}
        ></button>
      </div>
    </div>
  );
};

export default Card;
