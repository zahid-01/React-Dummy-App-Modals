import React from "react";
import styles from "../CSS/ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.closeModal} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.error.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.error.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.closeModal}>OK</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
