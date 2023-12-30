import styles from "./education.module.css";

export default function EducationalExperience({
  setSchoolName,
  setMajor,
  setDateEducation,
}) {
  function handleSchoolName(event) {
    setSchoolName(event.target.value);
  }

  function handleMajor(event) {
    setMajor(event.target.value);
  }

  function handleDate(event) {
    setDateEducation(event.target.value);
  }

  return (
    <div className={styles.userInformationBox}>
      <form
        className={styles.userInfo}
        onSubmit={(event) => event.preventDefault()}
      >
        <div className={styles.formGroup}>
          <label>School Name:</label>
          <input type="text" onChange={handleSchoolName} />
        </div>
        <div className={styles.formGroup}>
          <label>Major:</label>
          <input type="text" name="last name" onChange={handleMajor} />
        </div>
        <div className={styles.formGroup}>
          <label>Date:</label>
          <input type="text" name="email" onChange={handleDate} />
        </div>
      </form>
    </div>
  );
}
