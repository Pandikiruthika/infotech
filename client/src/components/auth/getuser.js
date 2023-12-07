import axios from "axios";
import { useEffect, useState } from "react";

export default function User() {
  const [token, setToken] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setToken(sessionStorage.getItem("token"));

      if (sessionStorage.token) {
        console.log(token)
        try {
          const result = await fetch("http://localhost:5000/user", {
            method: "get",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          axios.get('',{headers:{"Content-Type":'',Authorization}})
          const res = await result.json();
          setData(res.userprofile);
          
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    }

    fetchData()
  }, []); 

  return (
    <>
      <h1>User</h1>
      {data && <p>{data.email}</p>}
    </>
  );
}
