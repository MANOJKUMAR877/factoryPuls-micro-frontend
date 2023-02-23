import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
const AssetCard = React.lazy(() => import("asset/AssetCard"));
import fetchAPI from "asset/fetchAPI";
export default function AssetList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchAPI().then((res) => setData(res.data));
  }, []);
  return (
    <div>
      <AssetCard />
    </div>
  );
}
