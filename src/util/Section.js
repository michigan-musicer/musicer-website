import Divider from "./Divider";
import Item from "./Item";
import './Section.css';

export default function Section(props){
  console.log(props);
  return (
    <div className='section-container'>
      <h2 className='section-header'>{props.props.title}</h2>
      <Divider/>
      <div>
        {/* we want a similar mapping strategy from the navbar */}
        <ul>
          <li>
            <Item props={props.props.item}/>
          </li>
        </ul>
      </div>
    </div>
  );
}