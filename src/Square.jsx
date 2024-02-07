// eslint-disable-next-line react/prop-types

export default function Square({ value, onSqureClick }) {
  console.log(value, onSqureClick);
  return (
    <>
      <button
        className="bg-red border border-gray-400 h-20 w-20 m-1 leading-9 text-5xl font-bold"
        onClick={onSqureClick}
      >
        {value}
      </button>
    </>
  );
}
