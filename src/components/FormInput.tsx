import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FormInput() {
  return (
    <div className="mx-auto">
      <h2 className="text-3xl md:text-5xl  text-[#0582CA] my-3">
        Student Identity
      </h2>
      <div className="flex flex-col ">
        <label htmlFor="studentName" className="text-md md:text-lg text-white">
          Name
        </label>
        <input
          type="text"
          className="bg-[#006494] px-3 py-2 my-1 rounded-md text-white"
          id="studentName"
          name="studentName"
          placeholder="Type Student Name"
        />

        <label htmlFor="jenisKelamin" className="text-md md:text-lg text-white">
          Gender
        </label>
        <select
          name="jenisKelamin"
          id="jenisKelamin"
          className="bg-[#006494] text-white px-3 py-2 my-1 rounded-md"
        >
          <option value="">Select Gender</option>
          <option value="MALE">MALE</option>
          <option value="FEMALE">FEMALE</option>
        </select>

        <label htmlFor="major" className="text-md md:text-lg text-white">
          Major
        </label>
        <input
          type="text"
          className="bg-[#006494] px-3 py-2 my-1 rounded-md text-white"
          id="major"
          name="major"
          placeholder="Type Student Major"
        />
        <div className="flex items-center gap-5 my-4">
          <Button
            type="submit"
            variant="outline"
            className="text-[1.563rem] bg-[#04633D] border-none cursor-pointer  font-semibold px-4 py-3"
          >
            Add
          </Button>
          <Link href="/">
            <Button
              variant="outline"
              className="cursor-pointer  font-semibold px-4 py-3 bg-[#093166] border-none text-[1.563rem] text-white"
            >
              View
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
