import AddHabit from "./components/AddHabit";
import HabitGrid from "./components/HabitGrid";
import { useState,useEffect } from "react";
import EmptyState from "./components/EmptyState";
import {
  startOfWeek,
  addDays,
  addWeeks,
  subWeeks,
  format,
} from "date-fns";
function App() {
  const [habits, setHabits] = useState([]);
  const [input, setInput] = useState("");
  const [currentDate, setCurrentDate] =
  useState(new Date());
  useEffect(() => {
  const storedHabits =
    localStorage.getItem("habits");

  if (storedHabits) {
    setHabits(JSON.parse(storedHabits));
  }
}, []);
useEffect(() => {
  localStorage.setItem(
    "habits",
    JSON.stringify(habits)
  );
}, [habits]);
const weekStart = startOfWeek(
  currentDate,
  {
    weekStartsOn: 1,
  }
);

const weekDays = Array.from(
  { length: 7 },
  (_, i) => addDays(weekStart, i)
);
const goToPreviousWeek = () => {
  setCurrentDate(
    subWeeks(currentDate, 1)
  );
};

const goToNextWeek = () => {
  setCurrentDate(
    addWeeks(currentDate, 1)
  );
};

const goToCurrentWeek = () => {
  setCurrentDate(new Date());
};
  const toggleCompletion = (habitId, date) => {
  setHabits((prevHabits) =>
    prevHabits.map((habit) => {
      if (habit.id !== habitId) {
        return habit;
      }

      const updatedCompletions = {
        ...habit.completions,
      };

      if (updatedCompletions[date]) {
        delete updatedCompletions[date];
      } else {
        updatedCompletions[date] = true;
      }

      return {
        ...habit,
        completions: updatedCompletions,
      };
    })
  );
};

  const addHabit = () => {
    if (!input.trim()) return;

    const newHabit = {
      id: Date.now().toString(),
      name: input,
      completions: {},
    };

    setHabits([...habits, newHabit]);
    setInput("");
  };
const deleteHabit = (habitId) => {
  setHabits((prevHabits) =>
    prevHabits.filter(
      (habit) => habit.id !== habitId
    )
  );
};
const renameHabit = (
  habitId,
  newName
) => {
  setHabits((prevHabits) =>
    prevHabits.map((habit) => {
      if (habit.id === habitId) {
        return {
          ...habit,
          name: newName,
        };
      }

      return habit;
    })
  );
};
  return (
      <div className="min-h-screen bg-gray-50 p-4 md:p-6">
  
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Habit Tracker
      </h1>

      <AddHabit
        input={input}
        setInput={setInput}
        addHabit={addHabit}
      />
      <div className="flex flex-wrap gap-2 mb-6">

  <button
    onClick={goToPreviousWeek}
    className="bg-white border px-4 py-2 rounded-lg"
  >
    ← Previous
  </button>

  <button
    onClick={goToCurrentWeek}
    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
  >
    Today
  </button>

  <button
    onClick={goToNextWeek}
    className="bg-white border px-4 py-2 rounded-lg"
  >
    Next →
  </button>

</div>

      {habits.length === 0 ? (
  <EmptyState />
) : (
  <HabitGrid
  habits={habits}
  weekDays={weekDays}
  toggleCompletion={toggleCompletion}
  deleteHabit={deleteHabit}
  renameHabit={renameHabit}
/>
)}
    </div>
  );
}

export default App;