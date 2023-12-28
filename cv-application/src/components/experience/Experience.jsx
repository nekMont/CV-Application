import { useState } from "react";
import styles from "./experience.module.css";

export default function PersonalExperience() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [date, setdate] = useState("");

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
    setdate(event.target.value);
  }

  return (
    <div>
      <form
        className={styles.userInfo}
        onSubmit={(event) => event.preventDefault()}
      >
        <label>
          Company:
          <input type="text" name="school" onChange={handleCompany} />
        </label>
        <label>
          Position:
          <input type="text" name="major" onChange={handlePosition} />
        </label>
        <label>
          Rsponsibilities:
          <input type="text" name="date" onChange={handleResponsibilies} />
        </label>
        <label>
          Rsponsibilities:
          <input type="text" name="date" onChange={handleDate} />
        </label>
      </form>
      <h1>
        {company} {position} {responsibilities} {date}
      </h1>
    </div>
  );
}
