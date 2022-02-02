import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const UserComponent = () => {
  const { id } = useParams(0);
  const [user, setUser] = useState({ address: {} });
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
      <p>Name : {user.name}</p>
      <p>email: {user.email} </p>
      <p>
        address : {user.address.street} {user.address.suite} {user.address.city}
      </p>
      <Link to={`/user-more/${id}`}>
        <button style={{ marginLeft: 200 }}>View More</button>
      </Link>
    </div>
  );
};

export default UserComponent;
