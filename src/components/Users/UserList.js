import React from "react";
import styles from "../CSS/UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((el) => (
          <li key={Math.random()}>
            {el.name} {el.age} years old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
