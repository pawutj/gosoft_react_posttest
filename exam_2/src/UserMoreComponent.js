import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const UserMoreComponent = () => {
  const { id } = useParams(0);
  const [user, setUser] = useState({ company: {} });
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUser(result[id - 1]);
      });
  }, []);
  return (
    <div style={{ margin: 10, border: "ridge", width: 500 }}>
      <p>ID : {user.id}</p>
      <p>Phone : {user.phone}</p>
      <p>Website: {user.website} </p>
      <p>Company Name : {user.company.name}</p>
      <Link to={`/user/${id}`}>
        <button style={{ marginLeft: 200 }}>View More</button>
      </Link>
    </div>
  );
};

export default UserMoreComponent;
