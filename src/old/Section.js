export default function Section(props) {
  console.log(props);
  return (
    <div>
      <div className="section-title">
        <h1>{props.title}</h1>
      </div>
      <div className="section-text">
        <p>{props.text}</p>
      </div>
    </div>
  );
}