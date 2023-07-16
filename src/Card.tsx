import { useEffect, useState } from 'react';

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
      <div className="flex flex-col items-center p-8 m-4 gap-8 bg-grayish-blue rounded-xl w-full sm:w-[500px] h-60 relative text-center">
        <h1 className="text-neon-green">ADVICE #{advice?.slip.id}</h1>
        <p className="text-50 font-bold">"{advice?.slip.advice}"</p>
        <div className="bg-white h-[1px] w-full"></div>
        <div
          className="bg-neon-green h-11 rounded-full w-11 hover:shadow-[0_0_60px_1px_rgba(0,255,0,0.547)] absolute bottom-0 translate-y-1/2"
          onClick={handleOnclick}
        ></div>
      </div>
    </div>
  );
};

export default Card;
