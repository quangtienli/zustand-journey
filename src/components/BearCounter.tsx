import { useState } from 'react';
import useStore, { Bear } from '../store';

interface IBear {
  bear: Bear;
}

const defaultBearInformation = (): Bear => ({
  name: '',
  age: 0,
  dateOfBirth: new Date(),
  origin: 'Vietnam',
});

const Bear = ({ bear }: IBear) => {
  const increaseAge = useStore((state) => state.increaseAge);
  const decreaseAge = useStore((state) => state.decreaseAge);

  return (
    <div style={{ border: '1px solid coral' }}>
      <p>{`Name: ${bear.name}`}</p>
      <p>{`Age: ${bear.age}`}</p>
      <p>{`Date of birth: ${bear.dateOfBirth.toLocaleString()}`}</p>
      <p>{`Origin: ${bear.origin}`}</p>
      <button onClick={() => increaseAge(bear.name)}>Increase Age</button>
      <button onClick={() => decreaseAge(bear.name)}>Decrease Age</button>
    </div>
  );
};

const BearCounter = () => {
  const [information, setInformation] = useState<Bear>(
    defaultBearInformation()
  );

  const bears = useStore((state) => state.bears);
  const insert = useStore((state) => state.insert);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    insert(information);
    setInformation(defaultBearInformation());
  };

  return (
    <div>
      <p>Bear information</p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Bear's name"
          value={information.name}
          onChange={(event) =>
            setInformation((prevInformation) => ({
              ...prevInformation,
              name: event.target.value,
            }))
          }
        />
        <input
          placeholder="Bear's age"
          value={information.age}
          onChange={(event) =>
            setInformation((prevInformation) => ({
              ...prevInformation,
              age: Number(event.target.value || 0),
            }))
          }
        />
        <input
          placeholder="Bear's origin"
          value={information.origin}
          onChange={(event) =>
            setInformation((prevInformation) => ({
              ...prevInformation,
              origin: event.target.value,
            }))
          }
        />
        <button type='submit'>Insert</button>
      </form>
      {bears.map((bear) => (
        <Bear key={bear.name} bear={bear} />
      ))}
    </div>
  );
};

export default BearCounter;
