import './App.css';

const APP_KEY = import.meta.env.VITE_KEY;

function App() {
  console.log({ APP_KEY });
  return (
    <div>
      <p>{`App key: ${APP_KEY}`}</p>
    </div>
  );
}

export default App;
