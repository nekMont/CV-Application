import "./Display.module.css";
export default function DisplayEducation({ schoolName, major, date }) {
  return (
    <div className="educationFormatting">
      <p>
        <b>{schoolName}</b>
      </p>
      <p>
        <b>{major}</b>
      </p>
    </div>
  );
}
