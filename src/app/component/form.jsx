"use client";
import { useState } from "react";

const Form = () => {
  const [task, setTask] = useState({
    taskName: "",
    date: "",
    day: "",
    description: "",
    startTime: "",
    endTime: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="m-4 border-2 border-gray-500 rounded-2xl p-8">
      <form className="flex flex-col space-y-6 flex-wraps color-black">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          id="task"
          placeholder="Enter Task Name"
          value={task.taskName}
          onChange={handleChange}
        />
        <label htmlFor="day">Day</label>
        <div className="flex space-x-4">
          <button>Monday</button>
          <button>Tuesday</button>
          <button>Wednesday</button>
          <button>Thrusday</button>
          <button>Friday</button>
          <button>Saturday</button>
          <button>Sunday</button>
        </div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={task.date}
          onChange={handleChange}
        />
        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="start_time"
          value={task.time}
          onChange={handleChange}
        />
        <input type="time" id="end_time" />
        <label htmlFor="description">Description</label>
        <textarea
          className="resize-none border rounded-md w-full px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300 text-center"
          placeholder="Description"
          rows="4"
          cols="50"
          value={task.description}
          onChange={handleChange}
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
