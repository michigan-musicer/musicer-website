import Column from '../util/Column.js'
import Education from './Education.js';
import Skillset from './Skillset.js';

export default function NavigationBar(props) {
  console.log(props);
  return (  
    <div>
      {/* <Column props={props.props}/> */}
      <Education/>
      <Skillset/>
    </div>
  );
}