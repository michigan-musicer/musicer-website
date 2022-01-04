import Section from '../util/Section';
import DropDown from '../util/DropDown';

export default function WorkExp() {
  let sectionProps = {
    title: 'Work Experience', 
    items: [
      {
        left: 
          // <div style={{width: '100%'}}>
          <div style={{width: '100%'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <p style={{paddingRight: '2em'}}><b>University of Michigan</b> - Graduate student instructor</p>
              <em>Jan 2022 - present</em>
            </div>
            {/* this comes later! */}
            {/* <DropDown props={{title: 'Accomplishments at Ford', items: 
              [
                // turn these into items with left and rights -- use icons on the right to indicate what tools you used / worked with
                {item: <p>Expanded demo idea with single endpoint and single frontend page into a standalone product by adding four AWS Lambda endpoints, two DynamoDB tables, a Spring Boot backend hosted on AWS Elastic Container Service running a Kafka consumer, and two React pages to add business functionality and display new business information to customers.</p>},
                {item: <p>Practiced agile and pair programming workflows using tools including Rally, Jenkins, and SonarQube, completing 50 user stories as a two-developer team in three months.</p>},
                {item: <p>Read from third-party APIs from Autonomic and cooperated with external software engineers to collect and display business data processed through third-party services.</p>},
                {item: <p>Fixed bugs, refactored existing code, and improved performance by restructuring our application and reducing the amount of API calls,  ingraining best software engineering practices along the way.</p>},
                {item: <p>Interviewed customers about web application design and implemented changes based on feedback to display data to consumers of our product in a more helpful manner.</p>},
              ], indent: false}}/> */}
          
          </div>, 
          
      },
      {
        left: 
          // <div style={{width: '100%'}}>
          <div style={{width: '100%'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <p style={{paddingRight: '2em'}}><b>Ford Autonomous Vehicles LLC</b> - Full stack software engineer</p>
              <em>May 2021 - August 2021</em>
            </div>
            <DropDown props={{title: 'Accomplishments at Ford', items: 
              [
                // turn these into items with left and rights -- use icons on the right to indicate what tools you used / worked with
                {item: <p>Expanded demo idea with single endpoint and single frontend page into a standalone product by adding four AWS Lambda endpoints, two DynamoDB tables, a Spring Boot backend hosted on AWS Elastic Container Service running a Kafka consumer, and two React pages to add business functionality and display new business information to customers.</p>},
                {item: <p>Practiced agile and pair programming workflows using tools including Rally, Jenkins, and SonarQube, completing 50 user stories as a two-developer team in three months.</p>},
                {item: <p>Read from third-party APIs from Autonomic and cooperated with external software engineers to collect and display business data processed through third-party services.</p>},
                {item: <p>Fixed bugs, refactored existing code, and improved performance by restructuring our application and reducing the amount of API calls,  ingraining best software engineering practices along the way.</p>},
                {item: <p>Interviewed customers about web application design and implemented changes based on feedback to display data to consumers of our product in a more helpful manner.</p>},
              ], indent: false}}/>
          
          </div>, 
          
      },
      {
        left: 
          <div style={{width: '100%'}}>
             <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <p style={{paddingRight: '2em'}}><b>UMTRI (University of Michigan Transportation Research Institute)</b> - Student research leader</p>
              <em>May 2020 - August 2020</em>
            </div>
            <DropDown props={
              {title: 'Accomplishments at UMTRI', items: [
                {item: <p>Created plans, Python code, tests, and follow-up analysis for utilizing algorithms from research papers to classify images without supervision, laying foundations for future approaches with similar strategies.</p>},
                {item: <p>Investigated computer vision methods to reduce dataset size with the goal of increasing efficiency, maximizing accuracy, and minimizing biased decision-making in data processing, facilitating research by other transportation researchers.</p>},
                {item: <p>Introduced new student researchers to the lab by writing documentation and holding meetings, familiarizing newcomers with the project three months faster than it took for previous student researchers.</p>},
              ],
              indent: false
            }}/>
          </div> 
      }
    ],
    subsections: [
    ]
  };
  
  return (
    <Section props={sectionProps}/>
  );
}