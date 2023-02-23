import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
// tabs for rendering the interval 
export default function Tabs({
  handleIntervalChange = () => {},
  tabs = [],
  interval = "",
}) {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          onChange={(e) => handleIntervalChange(e.target.value)}
          className="border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option value={tab.name} key={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav
          className="flex w-2/3 ml-16 divide-x divide-gray-200 rounded-lg shadow isolate"
          aria-label="Tabs"
        >
          {tabs.map((tab, tabIdx) => (
            <div
              key={tab.name}
              onClick={() => handleIntervalChange(tab.name)}
              className={classNames(
                tab.current
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-700",
                tabIdx === 0 ? "rounded-l-lg" : "",
                tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                "group relative min-w-0 flex-1 cursor-pointer overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
              )}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  tab.name === interval ? "bg-indigo-500" : "bg-transparent",
                  "absolute inset-x-0 bottom-0 h-0.5"
                )}
              />
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
