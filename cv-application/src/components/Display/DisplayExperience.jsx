import "./DisplayComponent";

export default function DisplayExperience({
  company,
  position,
  responsibilities,
  date,
}) {
  return (
    <>
      <p>
        {company} {position} {responsibilities} {date}
      </p>
    </>
  );
}
