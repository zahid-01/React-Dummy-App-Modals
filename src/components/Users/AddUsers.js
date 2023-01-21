import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "../CSS/AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isValid, setIsValid] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (!username || !age || age < 1) {
      setIsValid({ title: "Error", message: "Try again" });
      return;
    }
    props.createUser({ name: username, age });
    setIsValid();
    setUsername("");
    setAge("");
  };

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(+e.target.value);
  };

  const isValidHandler = () => {
    setUsername("");
    setAge("");
    setIsValid();
  };

  return (
    <div>
      {isValid && <ErrorModal error={isValid} closeModal={isValidHandler} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={username}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={age}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
