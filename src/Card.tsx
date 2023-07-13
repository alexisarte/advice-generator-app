const Card = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-dark-blue text-center">
      <div className="bg-grayish-blue p-4 rounded-xl w-1/4">
        <h1 className="text-neon-green">Advice #117</h1>
        <p className="text[28px]">"It is easy to sit up an take notice, what's diffucult is getting up and talking action."</p>
        <button className="bg-neon-green text-dark-blue rounded-full p-4">New</button>
      </div>
    </div>
  );
};

export default Card;
