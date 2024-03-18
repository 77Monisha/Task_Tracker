"use client";
import { useState, useEffect } from "react";
import TaskForm from "./taskform";

const Form = () => {
  const [task, setTask] = useState({
    taskName: "",
    day: "",
    date: "",
    startTime: "",
    endTime: "",
    description: "",
  });

  const [taskData, setTaskData] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  // Changing the input field
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.id]: e.target.value,
    });
  };

  // Submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      task.taskName.trim() === "" ||
      task.description.trim() === "" ||
      task.day === "" ||
      task.startTime === "" ||
      task.endTime === "" ||
      task.date === ""
    ) {
      alert("Complete the form before submitting");
    } else {
      const data = { ...task, id: Date.now() };
      setTaskData([...taskData, data]);
      setTask({
        taskName: "",
        date: "",
        day: "",
        description: "",
        startTime: "",
        endTime: "",
      });
    }
  };

  const handleDelete = (taskToDelete) => {
    const updatedTask = taskData.filter((data) => data.id !== taskToDelete.id);

    setTaskData(updatedTask);

    setTask({
      taskName: "",
      date: "",
      day: "",
      description: "",
      startTime: "",
      endTime: "",
    });
  };

  // Updating the form
  const handleUpdate = (e) => {
    e.preventDefault();

    if (
      task.taskName.trim() === "" ||
      task.description.trim() === "" ||
      task.day === "" ||
      task.startTime === "" ||
      task.endTime === "" ||
      task.date === ""
    ) {
      alert("Complete the form before submitting");
    } else {
      const updatedTaskData = taskData.map((data) =>
        data.id === selectedTask.id ? { ...data, ...task } : data
      );
      setTaskData(updatedTaskData);
      setSelectedTask(null);

      setTask({
        taskName: "",
        date: "",
        day: "",
        description: "",
        startTime: "",
        endTime: "",
      });
    }
  };

  // Make Edits on top of previous Details
  const handleEdit = (taskToEdit) => {
    alert("Please go to Form for edits");
    setSelectedTask(taskToEdit);

    setTask({
      taskName: taskToEdit.taskName,
      date: taskToEdit.date,
      day: taskToEdit.day,
      description: taskToEdit.description,
      startTime: taskToEdit.startTime,
      endTime: taskToEdit.endTime,
    });
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center form m-4 border-2 border-gray-500 rounded-2xl p-8 mb-20 h-auto">
        <form
          className="flex flex-col space-y-6 flex-wrap color-black"
          onSubmit={selectedTask ? handleUpdate : handleSubmit}
        >
          <label htmlFor="task">Task</label>
          <input
            type="text"
            id="taskName"
            placeholder="Enter Task Name"
            value={task.taskName}
            onChange={handleChange}
          />
          <label htmlFor="day">Day : {task.day}</label>
          <div className=" day_btn flex flex-wrap space-x-4">
            <button
              className="btn"
              type="button"
              onClick={() => setTask({ ...task, day: "Monday" })}
            >
              Monday
            </button>
            <button
              className="btn"
              type="button"
              onClick={() => setTask({ ...task, day: "Tuesday" })}
            >
              Tuesday
            </button>
            <button
              className="btn"
              type="button"
              onClick={() => setTask({ ...task, day: "Wednesday" })}
            >
              Wednesday
            </button>
            <button
              className="btn"
              type="button"
              onClick={() => setTask({ ...task, day: "Thrusday" })}
            >
              Thrusday
            </button>
            <button
              className="btn"
              type="button"
              onClick={() => setTask({ ...task, day: "Friday" })}
            >
              Friday
            </button>
            <button
              className="btn"
              type="button"
              onClick={() => setTask({ ...task, day: "Saturday" })}
            >
              Saturday
            </button>
            <button
              className="btn"
              type="button"
              onClick={() => setTask({ ...task, day: "Sunday" })}
            >
              Sunday
            </button>
          </div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={task.date}
            onChange={handleChange}
            placeholder="Start time"
          />
          <label htmlFor="time">Start Time</label>
          <input
            type="time"
            id="startTime"
            value={task.startTime}
            onChange={handleChange}
          />
          <label htmlFor="time">End Time</label>
          <input
            type="time"
            id="endTime"
            value={task.endTime}
            onChange={handleChange}
          />
          <label htmlFor="description">Description</label>
          <textarea
            className="resize-none border rounded-md w-full px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300 text-center"
            placeholder="Description"
            id="description"
            rows="4"
            cols="50"
            value={task.description}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="btn">
            {selectedTask ? "Update" : "Submit"}
          </button>
        </form>
      </div>
      {/* 
      <div className="mt-60 w-full border-2 border-zinc-400 rounded-xl">
        <div className="flex flex-wrap justify-center items-center mt-20">
          <h1 className="text-5xl font-semibold text-zinc-800">Your Tasks</h1>
        </div> */}

      {/* <div className="mt-24 p-10">
          {taskData.map((data) => (
            <TaskForm
              key={data.id}
              data={data}
              handleDelete={handleDelete}
              onClick={() => handleEdit(data)}
            />
          ))}
        </div> */}
      {/* </div> */}
    </>
  );
};

export default Form;
