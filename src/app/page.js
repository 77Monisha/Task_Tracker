"use client";

import Contact from "./component/contact";
import Footer from "./component/footer";
import Form from "./component/form";
import Header from "./component/header";
import Pricing from "./component/pricing";
import Props from "./component/props";

export default function Home() {
  return (
    <>
      <main className="flex flex-wrap ml-20 mr-20">
        <Header />
        <section className="main_heading flex flex-wrap  flex-col w-1/2 mt-16 p-8">
          <div className="flex flex-col flex-wrap justify-center items-center">
            <h1 className="text-9xl text-center text-wrap font-extrabold text-zinc-700 mb-4 p-4 ">
              Task Tracker App
            </h1>

            <p className="mt-10 text-3xl text-zinc-700">
              Organize Your Work: Seamlessly & Effortlessly Which Manage All The
              Tasks, Master Your Time.
            </p>
          </div>
        </section>
        <section className="w-1/2 mt-16">
          <Form />
        </section>

        <section className=" mt-44 mr-6 ml-6">
          <Props />
        </section>

        <section className="w-full mt-44 mr-6 ml-6">
          <Pricing />
        </section>

        <section className="w-full mt-44 mr-6 ml-6">
          <Contact />
        </section>

        <section className="w-full ">
          <Footer />
        </section>

        {/* Remove this */}
        <section className="w-full ">
          <Footer />
        </section>
      </main>
    </>
  );
}
