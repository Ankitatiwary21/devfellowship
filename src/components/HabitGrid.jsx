import HabitRow from "./HabitRow";
import { format,isToday  } from "date-fns";

function HabitGrid({
  habits,
  weekDays,
  toggleCompletion,
  deleteHabit,
  renameHabit,
}) {
  return (
    <div className="overflow-x-auto">
        <div className="min-w-fit">
        
        {/* Header Row */}
        <div className="grid grid-cols-8 gap-1 md:gap-2">
          <div></div>

          {weekDays.map((day) => (
            <div
  key={day}
  className={`text-center font-medium rounded-lg py-2
    
    ${
      isToday(day)
        ? "bg-blue-100 text-blue-700"
        : "text-gray-600"
    }
  `}
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
  deleteHabit={deleteHabit}
  renameHabit={renameHabit}
/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HabitGrid;