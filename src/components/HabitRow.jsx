import { format, isToday } from "date-fns";

function calculateStreak(completions) {
  let streak = 0;

  const currentDate = new Date();

  while (true) {
    const formattedDate = format(
      currentDate,
      "yyyy-MM-dd"
    );

    if (completions[formattedDate]) {
      streak++;

      currentDate.setDate(
        currentDate.getDate() - 1
      );
    } else {
      break;
    }
  }

  return streak;
}

function HabitRow({
  habit,
  weekDays,
  toggleCompletion,
  deleteHabit,
  renameHabit
}) {

  const streak = calculateStreak(
    habit.completions
  );
const handleRename = () => {
  const newName = prompt(
    "Rename habit",
    habit.name
  );

  if (
    newName &&
    newName.trim()
  ) {
    renameHabit(
      habit.id,
      newName
    );
  }
};
  return (
    <div className="grid grid-cols-8 gap-1 md:gap-2 items-center">

      {/* Habit Name */}
      
       <div className="bg-white p-3 rounded-lg shadow-sm w-48">

  <div className="flex justify-between items-start gap-2">

    <div>
      <div className="font-medium break-words">
        {habit.name}
      </div>

      <div className="text-sm text-gray-500 mt-1">
        🔥 {streak} day streak
      </div>
    </div>

    <div className="flex gap-1">

      <button
        onClick={handleRename}
        className="text-sm px-2 py-1 rounded border"
      >
        ✏️
      </button>

      <button
        onClick={() =>
          deleteHabit(habit.id)
        }
        className="text-sm px-2 py-1 rounded border"
      >
        🗑️
      </button>

    </div>

  </div>

</div>

      {/* Week Cells */}
      {weekDays.map((day) => {
        const formattedDate = format(
          day,
          "yyyy-MM-dd"
        );

        const completed =
          habit.completions[formattedDate];

        return (
          <button
            key={formattedDate}
            onClick={() =>
              toggleCompletion(
                habit.id,
                formattedDate
              )
            }
            className={`h-10 w-10 md:h-12 md:w-12 rounded-lg border flex items-center justify-center transition cursor-pointer

              ${
                completed
                  ? "bg-green-500 text-white border-green-500"
                  : isToday(day)
                  ? "bg-blue-50 border-blue-300"
                  : "bg-white"
              }
            `}
          >
            {completed ? "✓" : ""}
          </button>
        );
      })}
    </div>
  );
}

export default HabitRow;