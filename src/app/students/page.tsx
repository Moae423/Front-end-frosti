import FormInput from "@/components/FormInput";
import ViewData from "@/components/ViewData";
import React from "react";

export default function Students() {
  return (
    <>
      <section className="min-h-screen bg-[#0E1E27]">
        <div className="flex  container  mx-auto flex-col md:flex-row items-center justify-center min-h-screen gap-5">
          <div className="max-w-md  mx-auto">
            <h1 className="text-[2rem] md:text-[3rem] lg:text-[6rem] text-[#00A6FB]  font-bold">
              Frosti High School
            </h1>
          </div>
          <FormInput />
        </div>
      </section>
      <section id="ViewData">
        <ViewData />
      </section>
    </>
  );
}
