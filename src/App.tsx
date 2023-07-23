import Card from './components/Card';

function App() {
  return (
    <div className="grid justify-center items-end min-h-screen bg-dark-blue">
      <Card />
      <div className="text-[11px] text-center text-light-cyan">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-custom-blue underline"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://alexis-rodriguez.tech/"
          target="_blank"
          className="text-custom-blue underline"
        >
          Alexis Rodriguez Arteaga
        </a>
        .
      </div>
    </div>
  );
}

export default App;
