import { useState } from "react";
import styles from "./education.module.css";

export default function EducationalExperience() {
  const [schoolName, setSchoolName] = useState("");
  const [major, setMajor] = useState("");
  const [date, setDate] = useState("");

  function handleSchoolName(event) {
    setSchoolName(event.target.value);
  }

  function handleMajor(event) {
    setMajor(event.target.value);
  }

  function handleDate(event) {
    setDate(event.target.value);
  }

  return (
    <div>
      <form
        className={styles.userInfo}
        onSubmit={(event) => event.preventDefault()}
      >
        <label>
          School:
          <input type="text" name="school" onChange={handleSchoolName} />
        </label>
        <label>
          Major:
          <input type="text" name="major" onChange={handleMajor} />
        </label>
        <label>
          Date:
          <input type="text" name="date" onChange={handleDate} />
        </label>
      </form>
      <h1>
        {schoolName} {major} {date}
      </h1>
    </div>
  );
}
