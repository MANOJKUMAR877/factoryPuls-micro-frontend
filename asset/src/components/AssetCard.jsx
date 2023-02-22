import React from "react";
export default function AssetCard({ value = {} }) {
  let {
    child_type = "type",
    producer = "producer",
    location = "location",
    text = "text",
    test_status = "pass",
    creationTime = "12.01.23",
  } = value || {};
  return (
    <li className="px-8 py-10 bg-gray-800 cursor-pointer rounded-2xl list-none">
      <h3 className="mt-3 mb-3 text-base font-semibold leading-7 tracking-tight text-white">
        {child_type.replaceAll("_", " ")}
      </h3>
      <hr />
      <div className="flex justify-center mt-6 gap-x-6 ">
        <p className="text-sm leading-6 text-gray-400">Producer - {producer}</p>
        <p className="text-sm leading-6 text-gray-400">Location - {location}</p>
      </div>

      <ul role="list" className="flex justify-center mt-6 gap-x-4 ">
        <li>
          <div className="text-gray-400 hover:text-gray-300">
            <p> {text}</p>
          </div>
        </li>
        <li>
          <div className="text-gray-400 hover:text-gray-300">
            Status :{" "}
            <span
              className={`inline-flex items-center rounded  py-0.5 text-xs font-medium text-gray-800 ${
                test_status === "Rejected"
                  ? "px-2 bg-red-300"
                  : "px-4 bg-green-300"
              }`}
            >
              {test_status}
            </span>
          </div>
        </li>
      </ul>
      <h4 className="mt-6 text-sm text-gray-200">
        Last Update : {creationTime.slice(0, 10)}
      </h4>
    </li>
  );
}
