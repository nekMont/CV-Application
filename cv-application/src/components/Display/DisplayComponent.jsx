import "./Display.module.css";

export default function DisplayComponent({ firstName, lastName, email }) {
  return (
    <>
      <p>
        {firstName} {lastName}
      </p>
      <p>{email}</p>
    </>
  );
}
