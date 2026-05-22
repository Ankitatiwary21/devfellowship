import HabitRow from "./HabitRow";
import { format } from "date-fns";

function HabitGrid({ habits, weekDays, toggleCompletion }) {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-max">
        
        {/* Header Row */}
        <div className="grid grid-cols-8 gap-2 mb-2">
          <div></div>

          {weekDays.map((day) => (
            <div
              key={day}
              className="text-center font-medium text-gray-600"
            >
              {format(day, "EEE")}
            </div>
          ))}
        </div>

        {/* Habit Rows */}
        <div className="space-y-2">
          {habits.map((habit) => (
            <HabitRow
              key={habit.id}
              habit={habit}
              weekDays={weekDays}
              toggleCompletion={toggleCompletion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HabitGrid;