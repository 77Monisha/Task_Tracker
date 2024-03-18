"use client";
import { useState } from "react";

const Props = () => {
  return (
    <div>
      <div className="feature border-2 text-white p-2 rounded flex justify-center items-center flex-wrap text-2xl font-normal">
        Features
      </div>

      <div className="prop_boxes flex flex-row justify-center items-center gap-20 flex-wrap m-15 mt-8">
        <span data-text="Task management">Task Management</span>
        <span>Data Backup and Restore</span>
        <span>User Authentication</span>
        <span>Task Filtering and Sorting</span>
        <span>Search Functionality</span>
        <span>Customization Options</span>
      </div>
    </div>
  );
};

export default Props;
