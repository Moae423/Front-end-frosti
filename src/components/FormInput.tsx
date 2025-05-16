"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { addStudents } from "@/services/StudentServices";

interface StudentForm {
  name: string;
  kelamin: string;
  major: string;
}

export default function FormInput() {
  const [form, setForm] = useState<StudentForm>({
    name: "",
    kelamin: "",
    major: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addStudents(form);
      alert("Input Data Berhasil");
      setForm({ name: "", kelamin: "", major: "" });
    } catch (err) {
      console.error(err);
      alert("Gagal menambahkan mahasiswa");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-auto">
        <h2 className="text-3xl md:text-5xl  text-[#0582CA] my-3">
          Student Identity
        </h2>
        <div className="flex flex-col ">
          <label htmlFor="name" className="text-md md:text-lg text-white">
            Name
          </label>
          <input
            type="text"
            className="bg-[#006494] px-3 py-2 my-1 rounded-md text-white"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Type Student Name"
          />

          <label htmlFor="kelamin" className="text-md md:text-lg text-white">
            Gender
          </label>
          <select
            name="kelamin"
            id="kelamin"
            value={form.kelamin}
            onChange={handleChange}
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
            value={form.major}
            onChange={handleChange}
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
    </form>
  );
}
