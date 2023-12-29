import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import EducationalExperience from "./components/education/Education.jsx";
import UserInformation from "./components/userInformation/userInformation.jsx";
import PersonalExperience from "./components/experience/Experience.jsx";
import DisplayComponent from "./components/Display/DisplayComponent.jsx";
//import Resume from "./components/resume/resume.jsx";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="Contain">
      <div className="infoBox">
        <UserInformation
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
        />
      </div>
      <div className="sheet">
        <div className="resume">
          <DisplayComponent
            firstName={firstName}
            lastName={lastName}
            email={email}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
