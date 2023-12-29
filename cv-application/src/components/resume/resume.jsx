//import EducationalExperience from "./components/education/Education.jsx";
import { useState } from "react";
import UserInformation from "../userInformation/userInformation.jsx";
import DisplayComponent from "../DisplayComponent.jsx";
import styles from "./resume.module.css";
//import PersonalExperience from "./components/experience/Experience.jsx";

export default function Resume() {
  return (
    <div>
      <UserInformation
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
      />
      <div className={styles.basicInformation}>
        <DisplayComponent
          firstName={firstName}
          lastName={lastName}
          email={email}
        />
        <div />
      </div>
      <div className="education">
        <p>
          {}
          {}
          {}
        </p>
      </div>
      <div className="experience">
        <p>
          {}
          {}
          {}
        </p>
      </div>
    </div>
  );
}
