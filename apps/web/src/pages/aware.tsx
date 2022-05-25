import React, { useState, FC, MouseEventHandler } from 'react';

interface IProps {
  color: number | undefined;
  num: number | undefined;
  show: boolean;
  button: HTMLButtonElement;
}

// color list [blue, yellow, red, white]
const COLORS: string[] = ['bg-yellow-400', 'bg-blue-600', 'bg-red-600'];

const Aware: FC<IProps> = () => {
  const [color, setColor] = useState<number | any>(null);
  const [num, setNum] = useState<number | undefined>();
  const [show, setShow] = useState(true);

  const handleClick: MouseEventHandler = () => {
    setShow(false);
    const interval = setInterval(() => {
      setColor((c: number) => (c === 2 ? 0 : c + 1));
      setNum(Math.floor(Math.random() * 10 + 1));
    }, 1000);
    return () => clearInterval(interval);
  };

  return (
    <div>
      <div className="w-screen h-screen absolute flex justify-center items-center">
        {show ? (
          <button
            type="button"
            className="border-black dark:border-white border-2 px-2 rounded-full drop-shadow-lg"
            onClick={handleClick}
          >
            Start Here!
          </button>
        ) : null}
      </div>
      <div className={`w-screen h-screen p-2 ${COLORS[color]}`}>
        <h1 className="text-black text-9xl pt-56 text-center">{num}</h1>
      </div>
    </div>
  );
};
export default Aware;