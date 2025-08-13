import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState();
  const token = localStorage.getItem("token");
  useEffect(() => {
    const req = fetch("http://localhost:1337/api/orders?populate=IetmsFiled", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
    }, []);
    console.log("Data fetched:", data);
  return (
    <div className="pt-[30px]">
      <div className="text-[#030229] text-[22px] font-bold">Dashboard</div>
      <div></div>
    </div>
  );
}
