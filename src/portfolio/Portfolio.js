import Column from '../util/Column.js'
import Education from './Education.js';

export default function NavigationBar(props) {
  console.log(props);
  return (  
    <div>
      {/* <Column props={props.props}/> */}
      <Education/>
    </div>
  );
}