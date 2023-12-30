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
    <div className={styles.userInformationBox}>
      <form
        className={styles.userInfo}
        onSubmit={(event) => event.preventDefault()}
      >
        <div className={styles.formGroup}>
          <label>First Name:</label>
          <input type="text" onChange={handleFirstNameChange} />
        </div>
        <div className={styles.formGroup}>
          <label>Last Name:</label>
          <input type="text" name="last name" onChange={handleLastNameChange} />
        </div>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input type="text" name="email" onChange={handleEmailChange} />
        </div>
      </form>
    </div>
  );
}
