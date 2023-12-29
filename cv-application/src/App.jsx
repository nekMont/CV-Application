import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import EducationalExperience from "./components/education/Education.jsx";
import UserInformation from "./components/userInformation/userInformation.jsx";
import PersonalExperience from "./components/experience/Experience.jsx";
import DisplayComponent from "./components/Display/DisplayComponent.jsx";
//import Resume from "./components/resume/resume.jsx";
import "./App.css";
import DisplayExperience from "./components/Display/DisplayExperience.jsx";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [date, setdate] = useState("");

  return (
    <div className="Contain">
      <div className="infoBox">
        <UserInformation
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
        />
        <PersonalExperience
          setCompanyompany={company}
          setPosition={position}
          setResponsibilities={responsibilities}
          setDate={date}
        />
      </div>
      <div className="sheet">
        <div className="resume">
          <DisplayComponent
            firstName={firstName}
            lastName={lastName}
            email={email}
          />
          <div className="education"></div>

          <div className="experience">
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
