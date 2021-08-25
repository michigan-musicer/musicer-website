import Column from '../util/Column.js'
import Divider from '../util/Divider.js'
import Education from './Education.js';
import Skillset from './Skillset.js';
import WorkExp from './WorkExp.js';
import Activities from './Activites.js';
import Projects from './Projects.js';
import Miscellaneous from './Miscellaneous.js';


export default function Portfolio(props) {
  return (  
    <div>
      <Education/>
      <Divider/>
      <Skillset/>
      <Divider/>
      <WorkExp/>
      <Projects/>
      <Activities/>
      <Miscellaneous/>
    </div>
  );
}