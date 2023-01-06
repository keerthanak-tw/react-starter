import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameHandler = (event) => setUsername(event.target.value);
  const ageHandler = (event) => setAge(event.target.value);

  const addUserHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      return;
    }

    if (+age.trim() < 1) {
      return;
    }

    props.onAddUser({ id: Math.random(), name: username, age });

    setUsername("");
    setAge("");
  };
  return (
    <div>
      <ErrorModal title="An error occured!" message="Something went wrong!" />
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameHandler}
            value={username}
          />
          <label htmlFor="age">Age (years)</label>
          <input id="age" type="number" onChange={ageHandler} value={age} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
