import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
const AssetCard = React.lazy(() => import("asset/AssetCard")); // import by lazy loading for optimize the performance
import fetchAPI from "asset/fetchAPI"; // import the api response value from the assest app
export default function AssetList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchAPI().then((res) => {
      setLoading(true);
      setData(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="py-24 bg-gray-900 sm:py-32">
      <div className="px-6 mx-auto text-center max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Home Asset
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Click the Asset to look their data
          </p>
        </div>
        {loading ? (
          <div>
            <h1 className="text-gray-200"> Loading...</h1>
          </div>
        ) : (
          <ul
            role="list"
            className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
            {data.map((value, index) => (
              <Link to={`/dashboard/${value.id}`} key={index}>
                <div key={index}>
                  <AssetCard value={value} />
                </div>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
