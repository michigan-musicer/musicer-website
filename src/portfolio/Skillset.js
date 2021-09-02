import './Skillset.css';
import Section from '../util/Section.js';
import SkillCard from './SkillCard.js';

export default function Skillset() {
  let sectionProps = {
    title: 'Skillset',
    items: [],
    subsections: []
  }

  let skillCard1Props = {
    title: 'FUNDAMENTALS',
    // cardColor: 'rgb(211, 88, 69, 1)',
    items: [
      'Java', 
      'C++', 
      'C',
      'Python',
      'JavaScript',
      'HTML/CSS',
      'SQL',
      'MongoDB',
      'REST APIs', 
      'Distributed systems'
    ],
  }

  let skillCard2Props = {
    title: 'MACHINE LEARNING',
    // cardColor: 'rgb(235, 134, 71, 1)',
    items: [
      'Numpy', 
      'Scikit-Learn', 
      'PyTorch', 
      'TensorFlow', 
      'Keras'
    ],
  }

  let skillCard3Props = {
    title: 'AMAZON WEB SERVICES TECHNOLOGIES',
    // cardColor: 'rgb(235, 134, 71, 1)',
    items: [
      'Lambda', 
      'CloudFront', 
      'DynamoDB', 
      'API Gateway', 
      'Elastic Container Service', 
      'CloudWatch', 
      'CloudFormation',
      'Amplify'
    ],
  }

  let skillCard4Props = {
    title: 'WEB DEV',
    // cardColor: 'rgb(0, 178, 169, 1)',
    items: [
      'Mockito', 
      'Spring/Spring Boot', 
      'Kafka',
      'React',
      'JSX', 
      'Jest',
      'Django',
    ],
  }

  let skillCard5Props = {
    title: 'WORKFLOW',
    // cardColor: 'rgb(117, 152, 141, 1)',
    items: [
      'Agile development',
      'Postman',
      'Jira/Rally',
      'Jenkins',
      'SonarQube',
      'Make',
      'Linux',
      'Git/GitHub',
      'Microsoft Office/Google Suite',
      'LaTeX',
    ],
  }

  return (
    <div>
      <Section props={sectionProps}/>
      <div className='skillset-container'>
        <SkillCard props={skillCard1Props} />
        <SkillCard props={skillCard2Props}/>
        <SkillCard props={skillCard3Props}/>
        <SkillCard props={skillCard4Props}/>
        <SkillCard props={skillCard5Props}/>
      </div>
    </div>
  );
}