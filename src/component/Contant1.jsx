import React from "react";

const Contant1 = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">

      <div className="w-[63%] text-xl flex flex-col gap-8">
        <h1 className="">
          I designed a Helpdesk product during my time as design director at{" "}
          <span className="underline decoration-2.5 underline-offset-7 decoration-pink-400">
           <a href="">Capacity</a>
          </span>
          .
        </h1>
        <p>
            Helpdesk is a core part of the Capacity platform because support issues that cannot be resolved with automation must be escalated to a [human] agent. We spent a lot of effort building personas around the helpdesk agents so we could understand their needs.
        </p>
        <p>This wasn't a time-boxed project with a clear end date. Rather, this was work that evolved over time as we released an MVP to the market, observed how customers used it, and adjusted and iterated over time. The following shows, not all, but many of the features we designed and shipped to the delight of our customers.

</p>
      </div>
    </div>
  );
};

export default Contant1;
