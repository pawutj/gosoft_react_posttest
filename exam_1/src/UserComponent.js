const UserComponent = ({ user = { address: {} } }) => {
  return (
    <div style={{ margin: 10, border: "ridge", width: 500 }}>
      <p>ID : {user.id}</p>
      <p>Name : {user.name}</p>
      <p>email: {user.email} </p>
      <p>
        address : {user.address.street} {user.address.suite} {user.address.city}
      </p>
      <button
        style={{ marginLeft: 200 }}
        onClick={() => {
          alert(JSON.stringify(user));
        }}
      >
        View More
      </button>
    </div>
  );
};

export default UserComponent;
