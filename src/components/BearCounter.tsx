import useStore from '../store';

const BearCounter = () => {
  const bears = useStore((state) => state.bears);
  const increase = useStore((state) => state.increasePopulation);
  const release = useStore((state) => state.releasePopulation);

  return (
    <div>
      <p>{`Bear population: ${bears}`}</p>
      <button onClick={increase}>+ Population</button>
      <button onClick={release}>Relase</button>
    </div>
  );
};

export default BearCounter;
