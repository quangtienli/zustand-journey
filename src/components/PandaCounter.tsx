import useStore from "../store";

const PandaCounter = () => {
    const pandas = useStore((state) => state.pandas)
    const addPanda = useStore((state) => state.addPanda)

  return <div>
      <p>PandaCounter</p>
      <p>{`Number of pandas: ${pandas}`}</p>
      <button onClick={addPanda}>Add panda</button>
  </div>;
};

export default PandaCounter;
