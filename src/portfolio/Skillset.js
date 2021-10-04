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
      'C++', 
      'Java', 
      'Python',
      'C',
      'JavaScript',
      'REST APIs', 
      'Distributed systems',
      'HTML/CSS',
      'SQL',
      'NoSQL databases',
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
    title: 'FRONTEND AND BACKEND',
    // cardColor: 'rgb(0, 178, 169, 1)',
    items: [
      'React',
      'Spring/Spring Boot', 
      'Kafka',
      'MongoDB',
      'Mockito',
      'Jest',
      'Django',
    ],
  }

  let skillCard5Props = {
    title: 'WORKFLOW',
    // cardColor: 'rgb(117, 152, 141, 1)',
    items: [
      'Agile development',
      'CI/CD',
      'Git/GitHub',
      'Jira/Rally',
      'Jenkins',
      'SonarQube',
      'Make',
      'Postman',
      'Linux',
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