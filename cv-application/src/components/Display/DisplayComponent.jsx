import "./Display.module.css";

export default function DisplayComponent({ firstName, lastName, email }) {
  return (
    <div className="formatting">
      <p>
        {firstName} {lastName}
      </p>

      <span>{email}</span>
    </div>
  );
}
