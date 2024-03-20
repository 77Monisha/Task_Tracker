"use client";
import { useState } from "react";

const Props = () => {
  return (
    <div>
      <div className="feature flex justify-center items-center flex-col flex-wrap">
        <h1 className="text-7xl font-bold">Features</h1>
        <p className="text-xl mt-2">
          Unlock limitless productivity with our powerful feature set.
        </p>
      </div>

      <div className="prop_boxes flex flex-row justify-center items-center gap-20 flex-wrap m-15 mt-16">
        <span data-text="Task management">Task Management</span>
        <span>Data Backup and Restore</span>
        <span>User Authentication</span>
        <span>Task Filtering and Sorting</span>
        <span>Search Functionality</span>
        <span>Customization Options</span>
      </div>
      <div className="prop_boxes flex flex-row justify-center items-center gap-20 flex-wrap m-15 mt-16">
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
