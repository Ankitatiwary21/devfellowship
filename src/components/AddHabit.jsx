function AddHabit({
  input,
  setInput,
  addHabit,
}) {
  return (
    <div className="flex gap-2 mb-6">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a habit"
        className="border px-4 py-2 rounded-lg flex-1"
      />

      <button
        onClick={addHabit}
        className="bg-black text-white px-4 py-2 rounded-lg"
      >
        Add
      </button>
    </div>
  );
}

export default AddHabit;