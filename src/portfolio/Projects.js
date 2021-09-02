import Section from '../util/Section';
import DropDown from '../util/DropDown';

export default function Projects() {
  let sectionProps = {
    title: 'Projects', 
    items: [
      {
        left: 
          // <div style={{width: '100%'}}>
          <div style={{width: '100%'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <p style={{paddingRight: '2em'}}><b>Distributed search engine</b> (senior design project)</p>
              <em>January 2021 - May 2021</em>
            </div>
            <DropDown props={
              {
                title: 'Details', 
                items: [
                    // turn these into items with left and rights -- use icons on the right to indicate what tools you used / worked with
                    {item: <p>Wrote over 4,700 lines of code contributing to the delivery of three major components and the utility library on a distributed, multithreaded search engine written in C++ totaling over 16,000 lines of code, seven million documents indexed, and three terabytes of collected data split across more than 30 machines.</p>},
                    {item: <p>Cooperated with a six-person team by creating agendas, communicating about assignments, and pair programming on different components to work more efficiently and finish a project not doable by a single individual.</p>},
                    {item: <p>Designed, coded, and integrated a solution for a distributed system problem that had previously never been solved in the class.</p>},
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
              <p style={{paddingRight: '2em'}}><b>Personal website</b></p>
              <em>August 2021 - present</em>
            </div>
            <DropDown props={
              {
                title: 'Details', 
                items: [
                    {item: <p>Created a website using React and deployed it with AWS Amplify to display academic and professional accomplishments to potential employers.</p>},
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