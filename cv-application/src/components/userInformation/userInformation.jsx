import styles from "./userInformation.module.css";

export default function UserInformation({
  setFirstName,
  setLastName,
  setEmail,
}) {
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
    </div>
  );
}
