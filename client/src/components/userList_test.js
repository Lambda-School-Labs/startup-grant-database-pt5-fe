import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/api/users`)
      .then(response => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);
  return (
    <h1>
      {users.map(user => (
        <li>{user.first_name}</li>
      ))}
    </h1>
  );
}
