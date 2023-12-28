import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import EducationalExperience from "./components/education/Education.jsx";
import UserInformation from "./components/userInformation/userInformation.jsx";
import PersonalExperience from "./components/experience/Experience.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="userInformation">
        <h2>General Information</h2>
        <UserInformation />
        <h2>Education</h2>
        <EducationalExperience />
        <h2>Experience</h2>
        <PersonalExperience />
      </div>
    </>
  );
}

export default App;
