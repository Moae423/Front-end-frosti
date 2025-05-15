import React from "react";

export default function ViewTable() {
  return (
    <div className="overflow-x-auto bg-white dark:bg-neutral-700">
      {/* Table */}
      <table className="mx-auto w-xl text-left text-sm whitespace">
        {/* Table head */}
        <thead className="uppercase tracking-wider border-b-2 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-800">
          <tr>
            <th scope="col" className="px-6 py-4">
              Name
            </th>
            <th scope="col" className="px-6 py-4">
              Gender
            </th>
            <th scope="col" className="px-6 py-4">
              Major
            </th>
            <th scope="col" className="px-6 py-4">
              Action
            </th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          <tr className="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
            <th scope="row" className="px-6 py-4">
              Handbag
            </th>
            <td className="px-6 py-4">$129.99</td>
            <td className="px-6 py-4">30</td>
            <td className="px-6 py-4">
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600 bg-neutral-50 dark:bg-neutral-800">
            <th scope="row" className="px-6 py-4">
              Shoes
            </th>
            <td className="px-6 py-4">$89.50</td>
            <td className="px-6 py-4">25</td>
            <td className="px-6 py-4">
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
