import Section from '../util/Section';
import DropDown from '../util/DropDown';

export default function Activities() {
  let sectionProps = {
    title: 'Academic Activities', 
    items: [
      {
        left: 
          // <div style={{width: '100%'}}>
          <div style={{width: '100%'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <p style={{paddingRight: '2em'}}><b>Research team leader</b> - DEVIATE (Data Elements from Video using Impartial Algorithm Tools for Extraction)</p>
              <em>Jan 2020 - present</em>
            </div>
            <DropDown props={
              {
                title: 'Details', 
                items: [
                  // turn these into items with left and rights -- use icons on the right to indicate what tools you used / worked with
                  {item: <p>Spearheading work on the research team by giving weekly presentations, organizing weekly team meetings, creating agendas, and guiding discussions to inform, direct, and assist team members with machine learning tasks.</p>},
                  {item: <p>Chosen for the DEVIATE lab at UMTRI through MDP (Multidisciplinary Design Program), a competitively selective program run by the College of Engineering.</p>},
                  {item: <p>Received and accepted offer to continue research work over the summer (see in "Work Experience" above)</p>},
                ], 
                indent: false
              }
            }/>
          </div>
      },
      {
        left: 
          <div style={{width: '100%'}}>
             <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <p style={{paddingRight: '2em'}}><b>Education admin</b> - MSAIL (Michigan Student Artificial Intelligence Lab)</p>
              <em>May 2020 - August 2020</em>
            </div>
            <DropDown props={
              {
                title: 'Details', 
                items: [
                  {item: <p>Created plans, Python code, tests, and follow-up analysis for utilizing algorithms from research papers  to classify images without supervision, laying foundations for future approaches with similar strategies.</p>},
                  {item: <p>Investigated computer vision methods to reduce dataset size to increase efficiency of video labelers while maximizing accuracy and minimizing biased decision-making, facilitating research by our funder, the Federal Highway Administration.</p>},
                  {item: <p>Introduced new student researchers to the lab by writing documentation and holding meetings, familiarizing newcomers with the project three months faster than it took for previous student researchers. </p>},
                ],
                indent: false
              }
            }/>
          </div> 
      }
    ],
  };
  
  return (
    <Section props={sectionProps}/>
  );
}