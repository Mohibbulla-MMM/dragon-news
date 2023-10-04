import { useEffect, useState } from "react";

const DynamicApi = (api, id) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setData(err));
  }, [api, id]);

  return data;
};

export default DynamicApi;
