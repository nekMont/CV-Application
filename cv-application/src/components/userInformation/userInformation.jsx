import { useState } from "react";
import styles from "./userInformation.module.css";

export default function UserInformation() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  return (
    <div>
      <form
        className={styles.userInfo}
        onSubmit={(event) => event.preventDefault()}
      >
        <label>
          first Name:
          <input type="text" onChange={handleFirstNameChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="last name" onChange={handleLastNameChange} />
        </label>
        <label>
          Email:
          <input type="text" name="email" onChange={handleEmailChange} />
        </label>
      </form>
      <h1>
        {firstName} {lastName} {email}
      </h1>
    </div>
  );
}
