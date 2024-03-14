"use client";

import Form from "./component/form";
import Header from "./component/header";

export default function Home() {
  return (
    <>
      <main className="flex flex-row justify-center items-center flex-wrap ml-20 mr-20">
        <Header />
        <div className="w-1/2 text-left pl-16 mt-16">
          <h1 className="main_heading text-9xl text-center text-wrap font-extrabold text-zinc-700 mb-2">
            Task Tracker App
          </h1>

          <p className="mt-10 text-2xl text-zinc-700">
            Organize Your Work: Seamlessly & Effortlessly Which Manage All The
            Tasks, Master Your Time.
          </p>
        </div>
        <div className="w-1/2 mt-16">
          <Form />
        </div>
      </main>
    </>
  );
}
