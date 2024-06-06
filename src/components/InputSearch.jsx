const InputSearch = ({ value, setValue }) => {
  return (
    <div className="w-full z-40 mt-10">
      <input
        type="text"
        placeholder="Buscar películas"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-[95%] m-auto flex items-center justify-center gap-2 rounded-lg bg-gray-800 px-4 py-3 mb-10 text-white border-none"
      />
    </div>
  );
};
export default InputSearch;
