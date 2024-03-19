const Pricing = () => {
  return (
    <div className="m-4 flex flex-wrap justify-center flex-col items-center">
      <div className="flex flex-wrap flex-col">
        <h1 className="text-7xl text-center font-bold">
          Plan that matches <br />
          your needs
        </h1>
        <p className="mt-4 text-center text-lg">
          Our pricing plans are designed to be affordable, <br />
          flexible, and tailored to your unique needs.
        </p>
        <div className="mt-8 flex justify-center items-center flex-wrap space-x-16 font-semibold text-xl">
          <span>Monthly</span>
          <span>Annually</span>
        </div>
      </div>

      <div className="mt-20 flex flex-row justify-center items-centern flex-wrap gap-20">
        <div className="pricing_plan">
          <div className="price_divider flex flex-col space-y-6">
            <h1 className="text-4xl font-extrabold">Basic</h1>
            <p className="text-lg ">
              Affordable and reliable for small businesses.
            </p>
            <h1 className="text-5xl font-extralight">
              $24<span style={{ fontSize: "1.5rem" }}>/month</span>
            </h1>
            <button className="bg-zinc-600 rounded-lg p-2 text-white text-2xl m-4">
              Get Started
            </button>
          </div>

          <div className="pricing_details mt-6 flex flex-wrap">
            <span>✓ 10GB storage</span>
            <span>✓ Create, edit, and organize tasks efficiently.</span>
            <span>✓ Automatically backup your task data</span>
            <span>
              ✓ Securely manage your tasks with user login/logout functionality.
            </span>
            <span>✘ Customize task views, layouts, and themes. </span>
          </div>
        </div>
        <div className="pricing_plan">
          <div className="price_divider flex flex-col space-y-6">
            <h1 className="text-4xl font-extrabold">Popular</h1>
            <p className="text-lg ">
              Expand your online presence with enhanced features.
            </p>
            <h1 className="text-5xl font-extralight">
              $42<span style={{ fontSize: "1.5rem" }}>/month</span>
            </h1>
            <button className="bg-zinc-600 rounded-lg p-2 text-white text-2xl m-4">
              Get Started
            </button>
          </div>

          <div className="pricing_details mt-6 flex flex-wrap">
            <span>✓ 100GB storage</span>
            <span>✓ All features included in the Basic Plan.</span>
            <span>
              ✓ Share tasks and collaborate with team members or collaborators.
            </span>
            <span>
              ✓ Receive notifications and reminders for upcoming tasks.
            </span>
            <span>✓ Customize task views, layouts, and themes. </span>
            <span>✘ Integrate with calendar apps, email. </span>
          </div>
        </div>
        <div className="pricing_plan">
          <div className="price_divider flex flex-col space-y-6">
            <h1 className="text-4xl font-extrabold">Ultimate</h1>
            <p className="text-lg ">
              Top-tier performance for high-traffic websites.
            </p>
            <h1 className="text-5xl font-extralight">
              $99<span style={{ fontSize: "1.5rem" }}>/month</span>
            </h1>
            <button className="bg-zinc-600 rounded-lg p-2 text-white text-2xl m-4">
              Get Started
            </button>
          </div>

          <div className="pricing_details mt-6 flex flex-wrap">
            <span>✓ Unlimited storage</span>
            <span>✓ All features included in the Advanced Plan.</span>
            <span>✓ Generate detailed reports and analytics</span>
            <span>✓ Get priority customer support.</span>
            <span>✓ Integrate with calendar apps, email. </span>
            <span>
              ✓ Receive notifications and reminders for upcoming tasks.
            </span>
          </div>
        </div>
      </div>

      <div className="mt-60 flex flex-wrap">
        <button className="bg-zinc-600 rounded-lg p-5 text-white text-lg">
          Compare all plans detail
        </button>
      </div>
    </div>
  );
};

export default Pricing;
