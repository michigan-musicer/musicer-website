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
              <p><b>Software engineer, full stack</b> - Ford Autonomous Vehicles LLC</p>
              <em>May 2021 - August 2021</em>
            </div>
            <DropDown props={{title: 'Accomplishments at Ford', items: 
              [
                // turn these into items with left and rights -- use icons on the right to indicate what tools you used / worked with
                {item: <p>Expanded demo product with single AWS Lambda endpoint and single frontend page into an independent product with five Lambda endpoints, Spring Boot services integrated with DynamoDB and Kafka, and three React pages.</p>},
                {item: <p>Created resources on the AWS cloud platform, including DynamoDB tables, Spring Boot services running on Elastic Container Service, and Lambda endpoints to expand the infrastructure of the application and allow the addition of future features and functionality.</p>},
                {item: <p>Added two pages and corresponding backend infrastructure (Spring Boot backend, Kafka consumer, AWS Lambda endpoints) to showcase new business information to our customers.</p>},
                {item: <p>Fixed bugs, refactored existing code, and improved performance by restructuring our application and reducing the amount of API calls,  ingraining best software engineering practices along the way.</p>},
                {item: <p>Interviewed customers about web application design and implemented changes based on feedback to display data to consumers of our product in a more helpful manner.</p>},
                {item: <p>Practiced agile and pair programming workflows with the assistance of tools including Rally, Jenkins, and SonarQube, completing 50 user stories as a two-developer team in three months. </p>},                
              ], indent: false}}/>
          
          </div>, 
          
      },
      {
        left: 
          <div style={{width: '100%'}}>
             <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <p><b>Student Researcher</b> - UMTRI (University of Michigan Transportation Research Institute)</p>
              <em>May 2020 - August 2020</em>
            </div>
            <DropDown props={
              {title: 'Accomplishments at UMTRI', items: [
                {item: <p>Created plans, Python code, tests, and follow-up analysis for utilizing algorithms from research papers  to classify images without supervision, laying foundations for future approaches with similar strategies.</p>},
                {item: <p>Investigated computer vision methods to reduce dataset size to increase efficiency of video labelers while maximizing accuracy and minimizing biased decision-making, facilitating research by our funder, the Federal Highway Administration.</p>},
                {item: <p>Introduced new student researchers to the lab by writing documentation and holding meetings, familiarizing newcomers with the project three months faster than it took for previous student researchers. </p>},
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