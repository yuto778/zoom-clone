import CallList from "@/components/CallList";
import React from "react";

const Recodings = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Recodings</h1>
      <CallList type="recordings" />
    </section>
  );
};

export default Recodings;
