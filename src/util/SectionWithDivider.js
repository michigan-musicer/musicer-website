import Section from './Section.js'
import Divider from './Divider.js'

export default function SectionWithDivider(props) {
  return (
    <div>
      <Section props={props}/>
      <Divider/>
    </div>
  );
}