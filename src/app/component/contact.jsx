import { IoIosArrowForward } from "react-icons/io";

const Contact = () => {
  return (
    <div className="flex justify-center flex-col items-center flex-wrap">
      <div className="flex flex-col flex-wrap justify-center items-center">
        <h1 className="text-center text-8xl">
          Get in touch with us for <br />
          more information
        </h1>
        <p className="text-2xl mt-2">
          If you need help or have a question, we are here to help you.
        </p>
      </div>

      <div className="mt-28 flex flex-wrap justify-center items-center gap-6">
        <div className="support flex-col space-y-6">
          <h1 className="text-3xl ">Chat Support</h1>
          <p className="text-lg">Our support team is just a click away.</p>
          <button className="text-lg">
            Chat now
            <IoIosArrowForward className="inline" />
          </button>
        </div>
        <div className="support flex-col space-y-6">
          <h1 className="text-3xl ">Email Support</h1>
          <p className="text-lg">
            Prefer to email? Send us an email <br />
            and we'll get back to you soon.
          </p>
          <button className="text-lg">
            Send Email
            <IoIosArrowForward className="inline" />
          </button>
        </div>
        <div className="support flex-col space-y-6">
          <h1 className="text-3xl ">Help Center</h1>
          <p className="text-lg">
            Our self-server help center is open
            <br /> 24/7 with 150+ articles to help.
          </p>
          <button className="text-lg">
            Visit Help Center
            <IoIosArrowForward className="inline" />
          </button>
        </div>
      </div>
      <div className="mt-28 flex flex-wrap justify-center items-center gap-6">
        <div className="support flex-col space-y-6">
          <h1 className="text-3xl ">Chat Support</h1>
          <p className="text-lg">Our support team is just a click away.</p>
          <button className="text-lg">
            Chat now
            <IoIosArrowForward className="inline" />
          </button>
        </div>
        <div className="support flex-col space-y-6">
          <h1 className="text-3xl ">Email Support</h1>
          <p className="text-lg">
            Prefer to email? Send us an email <br />
            and we'll get back to you soon.
          </p>
          <button className="text-lg">
            Send Email
            <IoIosArrowForward className="inline" />
          </button>
        </div>
        <div className="support flex-col space-y-6">
          <h1 className="text-3xl ">Help Center</h1>
          <p className="text-lg">
            Our self-server help center is open
            <br /> 24/7 with 150+ articles to help.
          </p>
          <button className="text-lg">
            Visit Help Center
            <IoIosArrowForward className="inline" />
          </button>
        </div>
      </div>

      <div className="mt-44 flex flex-col flex-wrap justify-center items-center">
        <h2 className="text-xl">Our Support Team</h2>
        <h2 className="text-3xl font-extrabold">Talk to real people</h2>
      </div>
    </div>
  );
};

export default Contact;
