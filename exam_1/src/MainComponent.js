import { useState, useEffect } from "react";
import UserComponent from "./UserComponent";

const MainComponent = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {users.map((user, i) => (
        <UserComponent user={user} key={i} />
      ))}
    </div>
  );
};

export default MainComponent;
