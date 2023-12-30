import "./Display.module.css";

export default function DisplayComponent({ firstName, lastName, email }) {
  return (
    <div className="formatting">
      <div className="name">
        <p>
          {firstName} {lastName}
        </p>
      </div>
      <div className="email">
        <p>{email}</p>
      </div>
    </div>
  );
}
