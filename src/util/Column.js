import SectionWithDivider from "./SectionWithDivider";

export default function Column(props) {
  console.log(props);
  return (
    <div>
      {/* eventually this should be an array that we index into */}
      {/* and we generate the sections with the mapping strat we use earlier */}
      <SectionWithDivider props={props.props}/> 
    </div>
  );
}