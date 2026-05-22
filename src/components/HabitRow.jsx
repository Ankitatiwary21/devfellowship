import { format } from "date-fns";

function HabitRow({
  habit,
  weekDays,
  toggleCompletion,
}) {
  return (
    <div className="grid grid-cols-8 gap-2 items-center">
      
      {/* Habit Name */}
      <div className="bg-white p-3 rounded-lg shadow-sm font-medium">
        {habit.name}
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
            className={`h-12 w-12 rounded-lg border flex items-center justify-center transition cursor-pointer
              
              ${
                completed
                  ? "bg-green-500 text-white"
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