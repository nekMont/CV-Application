import "./DisplayComponent";

export default function DisplayExperience({
  company,
  position,
  responsibilities,
  date,
}) {
  return (
    <>
      <div className="titleAndDate">
        <div>{company}</div>
        <div>{date}</div>
      </div>
      <div className="formatting">
        <p>{position}</p>
        <p>{responsibilities}</p>
      </div>
    </>
  );
}
