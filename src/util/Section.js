import Divider from "./Divider";
import Item from "./Item";
import './Section.css';

export default function Section(props){
  console.log(props);
  let listWithNumItems = [];
  let listWithNumSections = [];
  for (let i = 0; i < props.props.items.length; ++i) {
    listWithNumItems.push(i);
  }
  if (props.props.subsections) {
    for (let i = 0; i < props.props.subsections.length; ++i) {
      listWithNumSections.push(i);
    }
  }

  return (
    <div className='section-container'>
      <h2 className='section-header'>{props.props.title}</h2>
      <Divider/>
      <div>
        {/* we want a similar mapping strategy from the navbar */}
        <ul>
          {
            listWithNumItems.map((i) =>
              <li>
                <Item props={props.props.items[i]}/>
              </li>
            )
          }
        </ul>
        {
          listWithNumSections.map((i) =>
          // create a subsection that's smaller -- might want to use flex tricks
          // drop down menus! with a preview 
          <div>{props.props.subsections[i].subsection}</div>
          )
        }
      </div>
    </div>
  );
}