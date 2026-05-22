function EmptyState() {
  return (
    <div className="bg-white rounded-2xl p-10 text-center shadow-sm border">

      <div className="text-5xl mb-4">
        ✨
      </div>

      <h2 className="text-xl font-semibold mb-2">
        No habits yet
      </h2>

      <p className="text-gray-500">
        Start building your first streak by
        adding a habit above.
      </p>

    </div>
  );
}

export default EmptyState;