import { useState } from "react";
import EducationalExperience from "./components/education/Education.jsx";
import UserInformation from "./components/userInformation/userInformation.jsx";
import PersonalExperience from "./components/experience/Experience.jsx";
import DisplayComponent from "./components/Display/DisplayComponent.jsx";
import "./App.css";
import DisplayExperience from "./components/Display/DisplayExperience.jsx";
import DisplayEducation from "./components/Display/DisplayEducation.jsx";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [schoolName, setSchoolName] = useState("");
  const [major, setMajor] = useState("");
  const [dateEducation, setDateEducation] = useState("");

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="Contain">
      <div className="infoBox">
        <UserInformation
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
        />
        <EducationalExperience
          setSchoolName={setSchoolName}
          setMajor={setMajor}
          setDateEducation={setDateEducation}
        />
        <PersonalExperience
          setCompany={setCompany}
          setPosition={setPosition}
          setResponsibilities={setResponsibilities}
          setDate={setDate}
        />
      </div>

      {/* TODO: Need to re work so that a useState generates the header of each subject. we want to enter */}
      {/* TODO: also probably need to look into grids and practice that so that I can format the "sheet tot he specifics I want" */}
      <div className="sheet">
        <div className="resume">
          <div className="personalInformation">
            <DisplayComponent
              firstName={firstName}
              lastName={lastName}
              email={email}
            />
          </div>
          <div className="education">
            <h3>Education</h3>
            <hr className="solid"></hr>
            <DisplayEducation
              schoolName={schoolName}
              major={major}
              dateEducation={dateEducation}
            />
          </div>
          <div className="experience">
            <h3>Experience</h3>
            <hr className="solid"></hr>
            <DisplayExperience
              company={company}
              position={position}
              responsibilities={responsibilities}
              date={date}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
