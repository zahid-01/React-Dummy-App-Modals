import { useState } from "react";
import AddUser from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";

function App() {
  const [newUsers, setNewUsers] = useState([]);

  const addNewUserHandler = (users) => {
    setNewUsers((uz) => [...uz, users]);
  };

  return (
    <div>
      <AddUser createUser={addNewUserHandler} />;
      <UserList users={newUsers} />
    </div>
  );
}

export default App;
