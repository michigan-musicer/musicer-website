import SectionWithDivider from "./SectionWithDivider";
import DropDown from "./DropDown";

export default function Column(props) {
  let listWithNumItems = [];
  for (let i = 0; i < props.props.sections.length; ++i) {
    listWithNumItems.push(i);
  }

  return (
    <div>
      {
        listWithNumItems.map((i) =>
          <SectionWithDivider props={props.props.sections[i]}/> 
        )
      }
    </div>
  );
}