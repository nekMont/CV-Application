import styles from "./experience.module.css";

export default function PersonalExperience({
  setCompany,
  setPosition,
  setResponsibilities,
  setDate,
}) {
  function handleCompany(event) {
    setCompany(event.target.value);
  }

  function handlePosition(event) {
    setPosition(event.target.value);
  }

  function handleResponsibilies(event) {
    setResponsibilities(event.target.value);
  }

  function handleDate(event) {
    setDate(event.target.value);
  }

  return (
    <div className={styles.userInformationBox}>
      <form
        className={styles.userInfo}
        onSubmit={(event) => event.preventDefault()}
      >
        <div className={styles.formGroup}>
          <label>Company:</label>
          <input type="text" onChange={handleCompany} />
        </div>
        <div className={styles.formGroup}>
          <label>Position:</label>
          <input type="text" name="last name" onChange={handlePosition} />
        </div>
        <div className={styles.formGroup}>
          <label>Responsibilites:</label>
          <input type="text" name="email" onChange={handleResponsibilies} />
        </div>
        <div className={styles.formGroup}>
          <label>Date:</label>
          <input type="text" name="email" onChange={handleDate} />
        </div>
      </form>
    </div>
  );
}
