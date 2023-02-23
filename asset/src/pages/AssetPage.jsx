import React, { useState, useEffect } from "react";
import fetchAPI from "../API/fetchAPI";
import AssetCard from "../components/AssetCard";
export default function AssetPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchAPI().then((res) => setData(res.data)); // fetch the data and maping the assets
  }, []);

  return (
    <div className="py-24 bg-yellow-100 sm:py-32">
      <div className="px-6 mx-auto text-center max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Asset
          </h2>
         
        </div>
        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8"
        >

          {/*  maping the asset componets */}
          {data.map((value, index) => (
            <div key={index}>
              <AssetCard value={value} />  
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
