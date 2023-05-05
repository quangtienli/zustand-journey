import useStore from "../store";

const FishCounter = () => {
    const fishes = useStore((state) => state.fishes)
    const addFish = useStore((state) => state.addFish)

  return <div>
      <p>Fish counter</p>
      <p>{`Number of fishes: ${fishes}`}</p>
      <button onClick={addFish}>Add fish</button>
  </div>;
};

export default FishCounter;
