const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-800 text-center font-bold uppercase text-white rounded-md mb-3 p-2">
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
