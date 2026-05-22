import AddHabit from "./components/AddHabit";
import { useState } from "react";

function App() {
  const [habits, setHabits] = useState([]);
  const [input, setInput] = useState("");

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

      <div className="space-y-2">
        {habits.map((habit) => (
          <div
            key={habit.id}
            className="bg-white p-4 rounded-lg"
          >
            {habit.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;