import AddHabit from "./components/AddHabit";
import HabitGrid from "./components/HabitGrid";
import { useState } from "react";
import {
  startOfWeek,
  addDays,
  format,
} from "date-fns";


const weekStart = startOfWeek(new Date(), {
  weekStartsOn: 1,
});

const weekDays = Array.from(
  { length: 7 },
  (_, i) => addDays(weekStart, i)
);


function App() {
  const [habits, setHabits] = useState([]);
  const [input, setInput] = useState("");
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

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">
        Habit Tracker
      </h1>

      <AddHabit
        input={input}
        setInput={setInput}
        addHabit={addHabit}
      />

      <HabitGrid
  habits={habits}
  weekDays={weekDays}
   toggleCompletion={toggleCompletion}
/>
    </div>
  );
}

export default App;