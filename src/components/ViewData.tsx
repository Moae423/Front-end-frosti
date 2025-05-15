import React from "react";
import ViewTable from "./View/ViewTable";

export default function ViewData() {
  return (
    <div className="flex flex-col center justify-center h-[40rem]">
      <div className="py-4">
        <h1 className="text-[3rem] font-semibold font-sans text-center">
          Data Student Frosti High School
        </h1>
      </div>
      {/* Tabel */}
      <ViewTable />
      {/* Tabel */}
    </div>
  );
}
